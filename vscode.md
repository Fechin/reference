---
title: Visual Studio Code
intro: This is a reference of everythings that you can do or configurator in VSCode (including plugins)!
---
## Extensions

* mikestead.dotenv
* mikestead.dotenv
* formulahendry.auto-close-tag
* formulahendry.auto-rename-tag
* coachrichbart.better-jest
* coenraads.bracket-pair-colorize
* rebornix.toggle
* pkief.material-icon-theme
* esbenp.prettier-vscode
* ms-vscode-remote.remote-wsl (If you use WSL on Window)
* abusaidm.html-snippets

## Settings

```json
// You should try this following settings
{
"explorer.openEditors.visible": 0, //Hide openEditors

"explorer.openEditors.visible": 0, //Hide minimap
  /**
   * Find
   **/
  "search.useIgnoreFiles": false, // Dont't use .gitignore to ignore files when searching
  "search.exclude": {
    // Hide everything in /vendor, except the "laravel" and "livewire" folder. (start with l and end with a or i)
    "**/vendor/{[^l],?[^ai]}*": true,
    // Hide everything in /public, except "index.php"
    "**/public/{[^i],?[^n]}*": true,
    "**/node_modules": true,
    "**/dist": true,
    "**/_ide_helper.php": true,
    "**/composer.lock": true,
    "**/package-lock.json": true,
    "storage": true,
    "yarn.*": true,
    "**/.yarn": true,
    ".phpunit.result.cache": true,
    ".yarn": true
  },
  "customizeUI.stylesheet": {
      // Find these from the Devtools in VSCode
    ".editor .title": "background: transparent !important;",
    ".editor .title .label-container": "visibility: hidden;",
    // Hide top-right buttons
    ".editor .title .actions-container .action-item a": "visibility: hidden;",
    // Show top-right "settings goto icon"
    ".editor .title .actions-container .action-item a[title=\"Open Settings (UI)\"]": "visibility: initial;",
    ".editor .title .actions-container .action-item a[title=\"Open Settings (JSON)\"]": "visibility: initial;",
    // Make it the "right-most" icon.
    ".editor .title .actions-container": "flex-direction: row-reverse;",
    // Only show the scrollbar on hover.
    ".editor .scrollbar .slider": "visibility: hidden",
    ".editor .scrollbar:hover .slider": "visibility: initial",
    // Change cursor color.
    ".monaco-editor .cursor": "background: linear-gradient(to bottom, #7f00ff, #e100ff) !important; color: #292D3E !important"
  },
}
```

## Snippets

```json
{
 // CSS Snippets
 "Reset.css": {
  "prefix": "reset",
  "body": "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}",
  "description": "Add reset css, see <a href=\"https://meyerweb.com/eric/tools/css/reset/\">Reset CSS</a> for more details"
 },
    "Normalize.css": {
        "prefix": "normalize",
        "body": "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",
        "description": "Add Normalize.css"
    },
 "Diagnostics.css": {
  "prefix": "diagnostics",
  "body": "div:empty,li:empty,p:empty,span:empty,td:empty,th:empty{padding:.5em;background:#ff0}[style],center,font{outline:5px solid red}[class=\"\"],[id=\"\"]{outline:5px dotted red}img[alt=\"\"]{border:3px dotted red}img:not([alt]){border:5px solid red}img[title=\"\"]{outline:3px dotted #f0f}img:not([title]){outline:5px solid #f0f}table:not([summary]){outline:5px solid red}table[summary=\"\"]{outline:3px dotted red}th{border:2px solid red}th[scope=col],th[scope=row]{border:none}a[href]:not([title]){border:5px solid red}a[title=\"\"]{outline:3px dotted red}a[href=\"#\"]{background:#0f0}a[href=\"\"]{background:#f0f}",
  "description": "Add reset css, see <a href=\"https://meyerweb.com/eric/tools/css/diagnostics/index.html\">Diagnostics CSS</a> for more details"
 },
}
```
