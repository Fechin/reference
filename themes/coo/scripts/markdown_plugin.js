const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('markdown-it:renderer', function (md) {
    md.use(require('markdown-it-abbr'), {});
    md.use(require('markdown-it-footnote'), {});
    md.use(require('markdown-it-ins'), {});
    md.use(require('markdown-it-sub'), {});
    md.use(require('markdown-it-sup'), {});
    md.use(require('markdown-it-task-lists'), {});
    md.use(require('markdown-it-emoji'), {});
    md.use(require('markdown-it-attrs'), {});
    md.use(require('markdown-it-highlightjs'), {});
    md.use(require('markdown-it-checkbox'), {});
    md.use(require('markdown-it-multimd-table'), {
        multiline: false,
        rowspan: true,
        headerless: false,
    });
    md.use(require('markdown-it-shortcode-tag'),  {
        widget: {
            render: function (attrs, env) {
                let widgetPath = path.resolve(`./source/widget/${attrs.name}.html`);
                if (fs.existsSync(widgetPath)) {
                    return fs.readFileSync(widgetPath, 'utf8').trim();
                } else {
                    let error = `Error: ${attrs.name} widget not Found!`;
                    console.log(error);
                    return error;
                }
            }
        }
    });
    headerSections(md, {
        h2: {
            wrapperClass: 'h2-wrap',
            innerClass: 'h3-wrap-list',
        },
        h3: {
            wrapperClass: 'h3-wrap',
            innerClass: 'section',
        },
        tagName: "div"
    });
});

function headerSections(md, options) {
    const opts = Object.assign({}, options);

    function addSections(state) {
        let tokens = [];  // output
        let Token = state.Token;
        let sections = [];
        let nestedLevel = 0;

        function openTag(token, parser, classOptName) {
            let t = new Token(parser, opts.tagName, 1);
            t.block = true;
            const cls = token && opts[token.tag] && opts[token.tag][classOptName];
            t.attrs = appendClass(token.attrs, cls);
            return t;
        }

        function closeTag(parser) {
            let t = new Token(parser, opts.tagName, -1);
            t.block = true;
            return t;
        }

        function closeSections(section) {
            while (last(sections) && section.header <= last(sections).header) {
                sections.pop();
                tokens.push(closeTag('section_inner_close'));
                tokens.push(closeTag('section_wrapper_close'));
            }
        }

        function closeSectionsToCurrentNesting(nesting) {
            while (last(sections) && nesting < last(sections).nesting) {
                sections.pop();
                tokens.push(closeTag('section_inner_close'));
                tokens.push(closeTag('section_wrapper_close'));
            }
        }

        function closeAllSections() {
            while (sections.pop()) {
                tokens.push(closeTag('section_inner_close'));
                tokens.push(closeTag('section_wrapper_close'));
            }
        }

        for (let i = 0, l = state.tokens.length; i < l; i++) {
            let token = state.tokens[i];

            // record level of nesting
            if (token.type.search('heading') !== 0) {
                nestedLevel += token.nesting;
            }
            if (last(sections) && nestedLevel < last(sections).nesting) {
                closeSectionsToCurrentNesting(nestedLevel);
            }

            // add sections before headers
            let expect = opts.hasOwnProperty(token.tag);
            if (token.type === 'heading_open') {
                let section = {
                    header: headingLevel(token.tag),
                    nesting: nestedLevel
                };
                if (last(sections) && section.header <= last(sections).header && expect) {
                    closeSections(section);
                }
                if (expect) {
                    tokens.push(openTag(token, 'section_wrapper_open', 'wrapperClass'));
                    if (token.attrIndex('id') !== -1) {
                        // remove ID from token
                        token.attrs.splice(token.attrIndex('id'), 1);
                    }
                    sections.push(section);

                    // The attribute has been placed in section_open,
                    // clear the attribute of the header tag
                    token.attrs = [];
                }

                tokens.push(token);
            } else if (token.type === 'heading_close') { // add inner section after headers
                tokens.push(token);
                if (expect) {
                    tokens.push(openTag(token, 'section_inner_open', 'innerClass'));
                }
            } else {
                tokens.push(token);
            }

        }  // end for every token
        closeAllSections();

        state.tokens = tokens;
    }

    function appendClass(attrs, cls) {
        if (cls == null) {
            return attrs;
        }
        if (attrs == null) {
            attrs = [];
        }
        let appended = false;
        attrs.forEach(function (x, i) {
            if (x[0] === "class") {
                x[1] = cls + " " + x[1];
                appended = true;
            }
        });
        if (!appended) {
            attrs.push(["class", cls.trim()])
        }
        return attrs;
    }

    function headingLevel(header) {
        return parseInt(header.charAt(1));
    }

    function last(arr) {
        return arr.slice(-1)[0];
    }

    md.core.ruler.push('header_sections', addSections);
}