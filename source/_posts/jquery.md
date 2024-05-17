---
title: jQuery
date: 2020-12-24 21:08:21
background: bg-[#2c63a2]
tags:
  - web
  - js
  - javascript
  - library
categories:
  - Programming
intro: |
  This [jQuery](https://jquery.com/) cheat sheet is a great reference for both beginners and experienced developers.
plugins:
  - tooltip
  - copyCode
---

## Getting Started

### Including jQuery

```javascript {.wrap}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

#### Official CDN

```javascript {.wrap}
<script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
```

### jQuery syntax

```javascript
$(selector).methodOrFunction();
```

#### Example:

```javascript
$("#menu").on("click", () => {
  $(this).hide();
});

$("body").css("background", "red");
```

### jQuery document ready

```javascript
$(document).ready(function () {
  // Runs after the DOM is loaded.
  alert("DOM fully loaded!");
});
```

```javascript
$(function () {
  // Runs after the DOM is loaded.
  alert("DOM fully loaded!");
});
```

## jQuery Selectors

### Examples {.secondary}

```javascript
$("button").click(() => {
  $(":button").css("color", "red");
});
```

#### Combining selectors

```javascript
$("selector1, selector2 ...selectorn");
```

### Basics

<!-- prettier-ignore -->
- [*](https://api.jquery.com/all-selector/){data-tooltip="Selects all elements."}
- [.class](https://api.jquery.com/class-selector/){data-tooltip="Selects all elements with the given class. "}
- [element](https://api.jquery.com/element-selector/){data-tooltip="Selects all elements with the given tag name."}
- [#id](https://api.jquery.com/id-selector/){data-tooltip="Selects a single element with the given id attribute. "}
- [:hidden](https://api.jquery.com/hidden-selector/){data-tooltip="Selects all elements that are hidden."}
- [:visible](https://api.jquery.com/visible-selector/){data-tooltip="Selects all elements that are visible."}
- [:contains()](https://api.jquery.com/contains-selector/){data-tooltip="Select all elements that contain the specified text."}
- [:empty](https://api.jquery.com/empty-selector/){data-tooltip="Select all elements that have no children (including text nodes)."}
- [:has()](https://api.jquery.com/has-selector/){data-tooltip="Selects elements which contain at least one element that matches the specified selector."}
- [:parent](https://api.jquery.com/parent-selector/){data-tooltip="Select all elements that have at least one child node (either an element or text)."}
- [parent &gt; child](https://api.jquery.com/child-selector/){data-tooltip="Selects all direct child elements specified by child of elements specified by parent."}
- [ancestor descendant](https://api.jquery.com/descendant-selector/){data-tooltip="Selects all elements that are descendants of a given ancestor."}
- [prev + next](https://api.jquery.com/next-adjacent-Selector/){data-tooltip="Selects all next elements matching next that are immediately preceded by a sibling prev."}
- [prev ~ siblings](https://api.jquery.com/next-siblings-selector/){data-tooltip="Selects all sibling elements that follow after the prev element, have the same parent, and match the filtering siblings selector."}

{.marker-none .cols-3}

### Basic Filters

<!-- prettier-ignore -->
- [:animated](https://api.jquery.com/animated-selector/){data-tooltip="Select all elements that are in the progress of an animation at the time the selector is run."}
- [:eq()](https://api.jquery.com/eq-selector/){data-tooltip="Select the element at index n within the matched set."}
- [:even](https://api.jquery.com/even-selector/){data-tooltip="Selects even elements, zero-indexed.  See also :odd."}
- [:first](https://api.jquery.com/first-selector/){data-tooltip="Selects the first matched DOM element."}
- [:gt()](https://api.jquery.com/gt-selector/){data-tooltip="Select all elements at an index greater than index within the matched set."}
- [:header](https://api.jquery.com/header-selector/){data-tooltip="Selects all elements that are headers, like h1, h2, h3 and so on."}
- [:lang()](https://api.jquery.com/lang-selector/){data-tooltip="Selects all elements of the specified language."}
- [:last](https://api.jquery.com/last-selector/){data-tooltip="Selects the last matched element."}
- [:lt()](https://api.jquery.com/lt-selector/){data-tooltip="Select all elements at an index less than index within the matched set."}
- [:not()](https://api.jquery.com/not-selector/){data-tooltip="Selects all elements that do not match the given selector."}
- [:odd](https://api.jquery.com/odd-selector/){data-tooltip="Selects odd elements, zero-indexed.  See also :even."}
- [:root](https://api.jquery.com/root-selector/){data-tooltip="Selects the element that is the root of the document."}
- [:target](https://api.jquery.com/target-selector/){data-tooltip="Selects the target element indicated by the fragment identifier of the document&apos;s URI."}

{.marker-none .cols-3}

### Attribute

<!-- prettier-ignore -->
- [[name|="value"]](https://api.jquery.com/attribute-contains-prefix-selector/){data-tooltip="Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-)."}
- [[name*="value"]](https://api.jquery.com/attribute-contains-selector/){data-tooltip="Selects elements that have the specified attribute with a value containing a given substring."}
- [[name~="value"]](https://api.jquery.com/attribute-contains-word-selector/){data-tooltip="Selects elements that have the specified attribute with a value containing a given word, delimited by spaces."}
- [[name$="value"]](https://api.jquery.com/attribute-ends-with-selector/){data-tooltip="Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive."}
- [[name="value"]](https://api.jquery.com/attribute-equals-selector/){data-tooltip="Selects elements that have the specified attribute with a value exactly equal to a certain value."}
- [[name!="value"]](https://api.jquery.com/attribute-not-equal-selector/){data-tooltip="Select elements that either don&apos;t have the specified attribute, or do have the specified attribute but not with a certain value."}
- [[name^="value"]](https://api.jquery.com/attribute-starts-with-selector/){data-tooltip="Selects elements that have the specified attribute with a value beginning exactly with a given string."}
- [[name]](https://api.jquery.com/has-attribute-selector/){data-tooltip="Selects elements that have the specified attribute, with any value. "}
- [[name="value"][name2="value2"]](https://api.jquery.com/multiple-attribute-selector/){data-tooltip="Matches elements that match all of the specified attribute filters."} {.col-span-2}

{.marker-none .cols-2}

### Child Filters

<!-- prettier-ignore -->
- [:first-child](https://api.jquery.com/first-child-selector/){data-tooltip="Selects all elements that are the first child of their parent."}
- [:first-of-type](https://api.jquery.com/first-of-type-selector/){data-tooltip="Selects all elements that are the first among siblings of the same element name."}
- [:last-child](https://api.jquery.com/last-child-selector/){data-tooltip="Selects all elements that are the last child of their parent."}
- [:last-of-type](https://api.jquery.com/last-of-type-selector/){data-tooltip="Selects all elements that are the last among siblings of the same element name."}
- [:nth-child()](https://api.jquery.com/nth-child-selector/){data-tooltip="Selects all elements that are the nth-child of their parent."}
- [:nth-last-child()](https://api.jquery.com/nth-last-child-selector/){data-tooltip="Selects all elements that are the nth-child of their parent, counting from the last element to the first."}
- [:nth-last-of-type()](https://api.jquery.com/nth-last-of-type-selector/){data-tooltip="Selects all the elements that are the nth-child of their parent in relation to siblings with the same element name, counting from the last element to the first."}
- [:nth-of-type()](https://api.jquery.com/nth-of-type-selector/){data-tooltip="Selects all elements that are the nth child of their parent in relation to siblings with the same element name."}
- [:only-child](https://api.jquery.com/only-child-selector/){data-tooltip="Selects all elements that are the only child of their parent."}
- [:only-of-type()](https://api.jquery.com/only-of-type-selector/){data-tooltip="Selects all elements that have no siblings with the same element name."}

{.marker-none .cols-2}

### Forms

<!-- prettier-ignore -->
- [:button](https://api.jquery.com/button-selector/){data-tooltip="Selects all button elements and elements of type button."}
- [:checkbox](https://api.jquery.com/checkbox-selector/){data-tooltip="Selects all elements of type checkbox."}
- [:checked](https://api.jquery.com/checked-selector/){data-tooltip="Matches all elements that are checked or selected."}
- [:disabled](https://api.jquery.com/disabled-selector/){data-tooltip="Selects all elements that are disabled."}
- [:enabled](https://api.jquery.com/enabled-selector/){data-tooltip="Selects all elements that are enabled."}
- [:focus](https://api.jquery.com/focus-selector/){data-tooltip="Selects element if it is currently focused."}
- [:file](https://api.jquery.com/file-selector/){data-tooltip="Selects all elements of type file."}
- [:image](https://api.jquery.com/image-selector/){data-tooltip="Selects all elements of type image."}
- [:input](https://api.jquery.com/input-selector/){data-tooltip="Selects all input, textarea, select and button elements."}
- [:password](https://api.jquery.com/password-selector/){data-tooltip="Selects all elements of type password."}
- [:radio](https://api.jquery.com/radio-selector/){data-tooltip="Selects all  elements of type radio."}
- [:reset](https://api.jquery.com/reset-selector/){data-tooltip="Selects all elements of type reset."}
- [:selected](https://api.jquery.com/selected-selector/){data-tooltip="Selects all elements that are selected."}
- [:submit](https://api.jquery.com/submit-selector/){data-tooltip="Selects all elements of type submit."}
- [:text](https://api.jquery.com/text-selector/){data-tooltip="Selects all input elements of type text."}

{.marker-none .cols-3}

## jQuery Attributes

### Examples {.secondary .row-span-2}

```javascript
$("h2").css({
  color: "blue",
  backgroundColor: "gray",
  fontSize: "24px",
});
```

#### jQuery addClass

```javascript
$(".button").addClass("active");
```

#### jQuery removeClass

```javascript
$(".button").on("mouseleave", (evt) => {
  let e = evt.currentTarget;
  $(e).removeClass("active");
});
```

#### jQuery .toggleClass

```javascript
$(".choice").toggleClass("highlighted");
```

### Attributes

<!-- prettier-ignore -->
- [.attr()](https://api.jquery.com/attr/){data-tooltip="Get the value of an attribute for the first element in the set of matched elements."}
- [.prop()](https://api.jquery.com/prop/){data-tooltip="Get the value of a property for the first element in the set of matched elements."}
- [.removeAttr()](https://api.jquery.com/removeAttr/){data-tooltip="Remove an attribute from each element in the set of matched elements."}
- [.removeProp()](https://api.jquery.com/removeProp/){data-tooltip="Remove a property for the set of matched elements."}
- [.val()](https://api.jquery.com/val/){data-tooltip="Get the current value of the first element in the set of matched elements."}

{.marker-none .cols-2}

#### Data

<!-- prettier-ignore -->
- [jQuery.data()](https://api.jquery.com/jQuery.data/){data-tooltip="Store arbitrary data associated with the specified element. Returns the value that was set."}
- [.data()](https://api.jquery.com/data/){data-tooltip="Store arbitrary data associated with the matched elements."}
- [jQuery.hasData()](https://api.jquery.com/jQuery.hasData/){data-tooltip="Determine whether an element has any jQuery data associated with it."}
- [jQuery.removeData()](https://api.jquery.com/jQuery.removeData/){data-tooltip="Remove a previously-stored piece of data."}
- [.removeData()](https://api.jquery.com/removeData/){data-tooltip="Remove a previously-stored piece of data."}

{.marker-none .cols-2}

### CSS

<!-- prettier-ignore -->
- [.addClass()](https://api.jquery.com/addClass/){data-tooltip="Adds the specified class(es) to each element in the set of matched elements."}
- [.hasClass()](https://api.jquery.com/hasClass/){data-tooltip="Determine whether any of the matched elements are assigned the given class."}
- [.removeClass()](https://api.jquery.com/removeClass/){data-tooltip="Remove a single class, multiple classes, or all classes from each element in the set of matched elements."}
- [.toggleClass()](https://api.jquery.com/toggleClass/){data-tooltip="Add or remove one or more classes from each element in the set of matched elements, depending on either the class&apos;s presence or the value of the state argument."}
- [.css()](https://api.jquery.com/css/){data-tooltip="Get the computed style properties for the first element in the set of matched elements."}
- [jQuery.cssHooks](https://api.jquery.com/jQuery.cssHooks/){data-tooltip="Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties."}
- [jQuery.cssNumber](https://api.jquery.com/jQuery.cssNumber/){data-tooltip="An object containing all CSS properties that may be used without a unit. The .css() method uses this object to see if it may append px to unitless values."}
- [jQuery.escapeSelector()](https://api.jquery.com/jQuery.escapeSelector/){data-tooltip="Escapes any character that has a special meaning in a CSS selector."}

{.marker-none .cols-2}

### Dimensions

<!-- prettier-ignore -->
- [.height()](https://api.jquery.com/height/){data-tooltip="Get the current computed height for the first element in the set of matched elements."}
- [.innerHeight()](https://api.jquery.com/innerHeight/){data-tooltip="Get the current computed height for the first element in the set of matched elements, including padding but not border."}
- [.innerWidth()](https://api.jquery.com/innerWidth/){data-tooltip="Get the current computed inner width for the first element in the set of matched elements, including padding but not border."}
- [.outerHeight()](https://api.jquery.com/outerHeight/){data-tooltip="Get the current computed outer height (including padding, border, and optionally margin) for the first element in the set of matched elements."}
- [.outerWidth()](https://api.jquery.com/outerWidth/){data-tooltip="Get the current computed outer width (including padding, border, and optionally margin) for the first element in the set of matched elements."}
- [.width()](https://api.jquery.com/width/){data-tooltip="Get the current computed width for the first element in the set of matched elements."}

{.marker-none .cols-2}

### Offset

<!-- prettier-ignore -->
- [.offset()](https://api.jquery.com/offset/){data-tooltip="Get the current coordinates of the first element in the set of matched elements, relative to the document."}
- [.offsetParent()](https://api.jquery.com/offsetParent/){data-tooltip="Get the closest ancestor element that is positioned."}
- [.position()](https://api.jquery.com/position/){data-tooltip="Get the current coordinates of the first element in the set of matched elements, relative to the offset parent."}
- [.scrollLeft()](https://api.jquery.com/scrollLeft/){data-tooltip="Get the current horizontal position of the scroll bar for the first element in the set of matched elements."}
- [.scrollTop()](https://api.jquery.com/scrollTop/){data-tooltip="Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element."}

{.marker-none .cols-2}

## jQuery Manipulation

### Examples {.secondary .row-span-3}

```javascript
/*<span>Span.</span>*/
$("span").after("<p>Paragraph.</p>");
/*<span>Span.</span><p>Paragraph.</p>*/

/*<span>Span.</span>*/
$("<span>Span.</span>").replaceAll("p");
/*<p>Span.</p>*/

/*<span>This is span.</span>*/
$("span").wrap("<p></p>");
/*<p><span>This is span.</span></p>*/
```

### Copying

<!-- prettier-ignore -->
- [.clone()](https://api.jquery.com/clone/){data-tooltip="Create a deep copy of the set of matched elements."}

{.marker-none .cols-3}

### DOM Insertion, Around

<!-- prettier-ignore -->
- [.wrap()](https://api.jquery.com/wrap/){data-tooltip="Wrap an HTML structure around each element in the set of matched elements."}
- [.wrapAll()](https://api.jquery.com/wrapAll/){data-tooltip="Wrap an HTML structure around all elements in the set of matched elements."}
- [.wrapInner()](https://api.jquery.com/wrapInner/){data-tooltip="Wrap an HTML structure around the content of each element in the set of matched elements."}

{.marker-none .cols-3}

### DOM Insertion, Inside

<!-- prettier-ignore -->
- [.append()](https://api.jquery.com/append/){data-tooltip="Insert content, specified by the parameter, to the end of each element in the set of matched elements."}
- [.appendTo()](https://api.jquery.com/appendTo/){data-tooltip="Insert every element in the set of matched elements to the end of the target."}
- [.html()](https://api.jquery.com/html/){data-tooltip="Get the HTML contents of the first element in the set of matched elements."}
- [.prepend()](https://api.jquery.com/prepend/){data-tooltip="Insert content, specified by the parameter, to the beginning of each element in the set of matched elements."}
- [.prependTo()](https://api.jquery.com/prependTo/){data-tooltip="Insert every element in the set of matched elements to the beginning of the target."}
- [.text()](https://api.jquery.com/text/){data-tooltip="Get the combined text contents of each element in the set of matched elements, including their descendants."}
{.marker-none .cols-3}

### DOM Insertion, Outside

<!-- prettier-ignore -->
- [.after()](https://api.jquery.com/after/){data-tooltip="Insert content, specified by the parameter, after each element in the set of matched elements."}
- [.before()](https://api.jquery.com/before/){data-tooltip="Insert content, specified by the parameter, before each element in the set of matched elements."}
- [.insertAfter()](https://api.jquery.com/insertAfter/){data-tooltip="Insert every element in the set of matched elements after the target."}
- [.insertBefore()](https://api.jquery.com/insertBefore/){data-tooltip="Insert every element in the set of matched elements before the target."}

{.marker-none .cols-3}

### DOM Removal

<!-- prettier-ignore -->
- [.detach()](https://api.jquery.com/detach/){data-tooltip="Remove the set of matched elements from the DOM."}
- [.empty()](https://api.jquery.com/empty/){data-tooltip="Remove all child nodes of the set of matched elements from the DOM."}
- [.remove()](https://api.jquery.com/remove/){data-tooltip="Remove the set of matched elements from the DOM."}
- [.unwrap()](https://api.jquery.com/unwrap/){data-tooltip="Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place."}

{.marker-none .cols-3}

### DOM Replacement

<!-- prettier-ignore -->
- [.replaceAll()](https://api.jquery.com/replaceAll/){data-tooltip="Replace each target element with the set of matched elements."}
- [.replaceWith()](https://api.jquery.com/replaceWith/){data-tooltip="Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed."}

{.marker-none .cols-3}

## jQuery Traversing

### Filtering

<!-- prettier-ignore -->
- [.eq()](https://api.jquery.com/eq/){data-tooltip="Reduce the set of matched elements to the one at the specified index."}
- [.filter()](https://api.jquery.com/filter/){data-tooltip="Reduce the set of matched elements to those that match the selector or pass the function&apos;s test. "}
- [.first()](https://api.jquery.com/first/){data-tooltip="Reduce the set of matched elements to the first in the set."}
- [.has()](https://api.jquery.com/has/){data-tooltip="Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element."}
- [.is()](https://api.jquery.com/is/){data-tooltip="Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments."}
- [.last()](https://api.jquery.com/last/){data-tooltip="Reduce the set of matched elements to the final one in the set."}
- [.map()](https://api.jquery.com/map/){data-tooltip="Pass each element in the current matched set through a function, producing a new jQuery object containing the return values."}
- [.not()](https://api.jquery.com/not/){data-tooltip="Remove elements from the set of matched elements."}
- [.slice()](https://api.jquery.com/slice/){data-tooltip="Reduce the set of matched elements to a subset specified by a range of indices."}

{.marker-none .cols-3}

### Miscellaneous Traversing

<!-- prettier-ignore -->
- [.add()](https://api.jquery.com/add/){data-tooltip="Create a new jQuery object with elements added to the set of matched elements."}
- [.addBack()](https://api.jquery.com/addBack/){data-tooltip="Add the previous set of elements on the stack to the current set, optionally filtered by a selector."}
- [.andSelf()](https://api.jquery.com/andSelf/){data-tooltip="Add the previous set of elements on the stack to the current set."}
- [.contents()](https://api.jquery.com/contents/){data-tooltip="Get the children of each element in the set of matched elements, including text and comment nodes."}
- [.each()](https://api.jquery.com/each/){data-tooltip="Iterate over a jQuery object, executing a function for each matched element. "}
- [.end()](https://api.jquery.com/end/){data-tooltip="End the most recent filtering operation in the current chain and return the set of matched elements to its previous state."}

{.marker-none .cols-3}

### Tree Traversal

<!-- prettier-ignore -->
- [.children()](https://api.jquery.com/children/){data-tooltip="Get the children of each element in the set of matched elements, optionally filtered by a selector."}
- [.closest()](https://api.jquery.com/closest/){data-tooltip="For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree."}
- [.find()](https://api.jquery.com/find/){data-tooltip="Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element."}
- [.next()](https://api.jquery.com/next/){data-tooltip="Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector."}
- [.nextAll()](https://api.jquery.com/nextAll/){data-tooltip="Get all following siblings of each element in the set of matched elements, optionally filtered by a selector."}
- [.nextUntil()](https://api.jquery.com/nextUntil/){data-tooltip="Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed."}
- [.parent()](https://api.jquery.com/parent/){data-tooltip="Get the parent of each element in the current set of matched elements, optionally filtered by a selector."}
- [.parents()](https://api.jquery.com/parents/){data-tooltip="Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector."}
- [.parentsUntil()](https://api.jquery.com/parentsUntil/){data-tooltip="Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object."}
- [.prev()](https://api.jquery.com/prev/){data-tooltip="Get the immediately preceding sibling of each element in the set of matched elements. If a selector is provided, it retrieves the previous sibling only if it matches that selector."}
- [.prevAll()](https://api.jquery.com/prevAll/){data-tooltip="Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector."}
- [.prevUntil()](https://api.jquery.com/prevUntil/){data-tooltip="Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object."}
- [.siblings()](https://api.jquery.com/siblings/){data-tooltip="Get the siblings of each element in the set of matched elements, optionally filtered by a selector."}

{.marker-none .cols-3}

## jQuery Events

### Examples {.secondary .row-span-6}

```javascript
// A mouse event 'click'
$("#menu-button").on("click", () => {
  $("#menu").show();
});

// A keyboard event 'keyup'
$("#textbox").on("keyup", () => {
  $("#menu").show();
});

// A scroll event 'scroll'
$("#menu-button").on("scroll", () => {
  $("#menu").show();
});
```

#### Event object

```javascript
$("#menu").on("click", (event) => {
  $(event.currentTarget).hide();
});
```

#### Method chaining

```javascript
$("#menu-btn")
  .on("mouseenter", () => {
    $("#menu").show();
  })
  .on("mouseleave", () => {
    $("#menu").hide();
  });
```

#### Prevents the event

```javascript
$("p").click(function (event) {
  event.stopPropagation();
  // Do something
});
```

### Browser Events

<!-- prettier-ignore -->
- [.error()](https://api.jquery.com/error/){data-tooltip="Bind an event handler to the error JavaScript event."}
- [.resize()](https://api.jquery.com/resize/){data-tooltip="Bind an event handler to the resize JavaScript event, or trigger that event on an element."}
- [.scroll()](https://api.jquery.com/scroll/){data-tooltip="Bind an event handler to the scroll JavaScript event, or trigger that event on an element."}

{.marker-none .cols-3}

### Event Object {.row-span-6}

<!-- prettier-ignore -->
- [event.currentTarget](https://api.jquery.com/event.currentTarget/){data-tooltip=" The current DOM element within the event bubbling phase.  "}
- [event.delegateTarget](https://api.jquery.com/event.delegateTarget/){data-tooltip="The element where the currently-called jQuery event handler was attached."}
- [event.data](https://api.jquery.com/event.data/){data-tooltip="An optional object of data passed to an event method when the current executing handler is bound.  "}
- [event.isDefaultPrevented()](https://api.jquery.com/event.isDefaultPrevented/){data-tooltip="Returns whether event.preventDefault() was ever called on this event object. "}
- [event.isImmediatePropagationStopped()](https://api.jquery.com/event.isImmediatePropagationStopped/){data-tooltip="  Returns whether event.stopImmediatePropagation() was ever called on this event object. "}
- [event.isPropagationStopped()](https://api.jquery.com/event.isPropagationStopped/){data-tooltip="  Returns whether event.stopPropagation() was ever called on this event object. "}
- [event.metaKey](https://api.jquery.com/event.metaKey/){data-tooltip="Indicates whether the META key was pressed when the event fired."}
- [event.namespace](https://api.jquery.com/event.namespace/){data-tooltip="The namespace specified when the event was triggered."}
- [event.pageX](https://api.jquery.com/event.pageX/){data-tooltip="The mouse position relative to the left edge of the document."}
- [event.pageY](https://api.jquery.com/event.pageY/){data-tooltip="The mouse position relative to the top edge of the document."}
- [event.preventDefault()](https://api.jquery.com/event.preventDefault/){data-tooltip="If this method is called, the default action of the event will not be triggered."}
- [event.relatedTarget](https://api.jquery.com/event.relatedTarget/){data-tooltip="The other DOM element involved in the event, if any."}
- [event.result](https://api.jquery.com/event.result/){data-tooltip="The last value returned by an event handler that was triggered by this event, unless the value was undefined."}
- [event.stopImmediatePropagation()](https://api.jquery.com/event.stopImmediatePropagation/){data-tooltip="Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree."}
- [event.stopPropagation()](https://api.jquery.com/event.stopPropagation/){data-tooltip="Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event."}
- [event.target](https://api.jquery.com/event.target/){data-tooltip=" The DOM element that initiated the event.  "}
- [event.timeStamp](https://api.jquery.com/event.timeStamp/){data-tooltip="The difference in milliseconds between the time the browser created the event and January 1, 1970."}
- [event.type](https://api.jquery.com/event.type/){data-tooltip="Describes the nature of the event."}
- [event.which](https://api.jquery.com/event.which/){data-tooltip="For key or mouse events, this property indicates the specific key or button that was pressed."}

{.marker-none .cols-1}

### Document Loading

<!-- prettier-ignore -->
- [.load()](https://api.jquery.com/load-event/){data-tooltip="Bind an event handler to the load JavaScript event."}
- [.ready()](https://api.jquery.com/ready/){data-tooltip="Specify a function to execute when the DOM is fully loaded."}
- [.unload()](https://api.jquery.com/unload/){data-tooltip="Bind an event handler to the unload JavaScript event."}

{.marker-none .cols-3}

### Event Handler Attachment

<!-- prettier-ignore -->
- [.bind()](https://api.jquery.com/bind/){data-tooltip="Attach a handler to an event for the elements."}
- [.delegate()](https://api.jquery.com/delegate/){data-tooltip="Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements."}
- [.die()](https://api.jquery.com/die/){data-tooltip="Remove event handlers previously attached using .live() from the elements."}
- [.live()](https://api.jquery.com/live/){data-tooltip="Attach an event handler for all elements which match the current selector, now and in the future."}
- [.off()](https://api.jquery.com/off/){data-tooltip="Remove an event handler."}
- [.on()](https://api.jquery.com/on/){data-tooltip="Attach an event handler function for one or more events to the selected elements."}
- [.one()](https://api.jquery.com/one/){data-tooltip="Attach a handler to an event for the elements. The handler is executed at most once per element per event type."}
- [.trigger()](https://api.jquery.com/trigger/){data-tooltip="Execute all handlers and behaviors attached to the matched elements for the given event type."}
- [.triggerHandler()](https://api.jquery.com/triggerHandler/){data-tooltip="Execute all handlers attached to an element for an event."}
- [.unbind()](https://api.jquery.com/unbind/){data-tooltip="Remove a previously-attached event handler from the elements."}
- [.undelegate()](https://api.jquery.com/undelegate/){data-tooltip="Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements."}

{.marker-none .cols-3}

### Form Events

<!-- prettier-ignore -->
- [.blur()](https://api.jquery.com/blur/){data-tooltip="Bind an event handler to the blur JavaScript event, or trigger that event on an element."}
- [.change()](https://api.jquery.com/change/){data-tooltip="Bind an event handler to the change JavaScript event, or trigger that event on an element."}
- [.focus()](https://api.jquery.com/focus/){data-tooltip="Bind an event handler to the focus JavaScript event, or trigger that event on an element."}
- [.focusin()](https://api.jquery.com/focusin/){data-tooltip="Bind an event handler to the focusin event."}
- [.focusout()](https://api.jquery.com/focusout/){data-tooltip="Bind an event handler to the focusout JavaScript event."}
- [.select()](https://api.jquery.com/select/){data-tooltip="Bind an event handler to the select JavaScript event, or trigger that event on an element."}
- [.submit()](https://api.jquery.com/submit/){data-tooltip="Bind an event handler to the submit JavaScript event, or trigger that event on an element."}

{.marker-none .cols-3}

### Keyboard Events

<!-- prettier-ignore -->
- [.keydown()](https://api.jquery.com/keydown/){data-tooltip="Bind an event handler to the keydown JavaScript event, or trigger that event on an element."}
- [.keypress()](https://api.jquery.com/keypress/){data-tooltip="Bind an event handler to the keypress JavaScript event, or trigger that event on an element."}
- [.keyup()](https://api.jquery.com/keyup/){data-tooltip="Bind an event handler to the keyup JavaScript event, or trigger that event on an element."}
{.marker-none .cols-3}

### Mouse Events

<!-- prettier-ignore -->
- [.click()](https://api.jquery.com/click/){data-tooltip="Bind an event handler to the click JavaScript event, or trigger that event on an element."}
- [.contextMenu()](https://api.jquery.com/contextmenu/){data-tooltip="Bind an event handler to the contextmenu JavaScript event, or trigger that event on an element."}
- [.dblclick()](https://api.jquery.com/dblclick/){data-tooltip="Bind an event handler to the dblclick JavaScript event, or trigger that event on an element."}
- [.hover()](https://api.jquery.com/hover/){data-tooltip="Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements."}
- [.mousedown()](https://api.jquery.com/mousedown/){data-tooltip="Bind an event handler to the mousedown JavaScript event, or trigger that event on an element."}
- [.mouseenter()](https://api.jquery.com/mouseenter/){data-tooltip="Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element."}
- [.mouseleave()](https://api.jquery.com/mouseleave/){data-tooltip="Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element."}
- [.mousemove()](https://api.jquery.com/mousemove/){data-tooltip="Bind an event handler to the mousemove JavaScript event, or trigger that event on an element."}
- [.mouseout()](https://api.jquery.com/mouseout/){data-tooltip="Bind an event handler to the mouseout JavaScript event, or trigger that event on an element."}
- [.mouseover()](https://api.jquery.com/mouseover/){data-tooltip="Bind an event handler to the mouseover JavaScript event, or trigger that event on an element."}
- [.mouseup()](https://api.jquery.com/mouseup/){data-tooltip="Bind an event handler to the mouseup JavaScript event, or trigger that event on an element."}
- [.toggle()](https://api.jquery.com/toggle-event/){data-tooltip="Bind two or more handlers to the matched elements, to be executed on alternate clicks."}

{.marker-none .cols-3}

## jQuery Effects

### Examples {.secondary .row-span-2}

```javascript
$("#menu-button").on("click", () => {
  // $('#menu').fadeIn(400, 'swing')
  $("#menu").fadeIn();
});
```

#### fadeOut effect

```javascript
$("#menu-button").on("click", () => {
  // $('#menu').fadeOut(400, 'swing')
  $("#menu").fadeOut();
});
```

### Basics

<!-- prettier-ignore -->
- [.hide()](https://api.jquery.com/hide/){data-tooltip="Hide the matched elements."}
- [.show()](https://api.jquery.com/show/){data-tooltip="Display the matched elements."}
- [.toggle()](https://api.jquery.com/toggle/){data-tooltip="Display or hide the matched elements."}

{.marker-none .cols-3}

### Sliding

<!-- prettier-ignore -->
- [.slideDown()](https://api.jquery.com/slideDown/){data-tooltip="Display the matched elements with a sliding motion."}
- [.slideToggle()](https://api.jquery.com/slideToggle/){data-tooltip="Display or hide the matched elements with a sliding motion."}
- [.slideUp()](https://api.jquery.com/slideUp/){data-tooltip="Hide the matched elements with a sliding motion."}

{.marker-none .cols-3}

### Custom

<!-- prettier-ignore -->
- [.animate()](https://api.jquery.com/animate/){data-tooltip="Perform a custom animation of a set of CSS properties."}
- [.clearQueue()](https://api.jquery.com/clearQueue/){data-tooltip="Remove from the queue all items that have not yet been run."}
- [.delay()](https://api.jquery.com/delay/){data-tooltip="Set a timer to delay execution of subsequent items in the queue."}
- [.dequeue()](https://api.jquery.com/dequeue/){data-tooltip="Execute the next function on the queue for the matched elements."}
- [jQuery.dequeue()](https://api.jquery.com/jQuery.dequeue/){data-tooltip="Execute the next function on the queue for the matched element."}
- [.finish()](https://api.jquery.com/finish/){data-tooltip="Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements."}
- [jQuery.fx.interval](https://api.jquery.com/jQuery.fx.interval/){data-tooltip="The rate (in milliseconds) at which animations fire."}
- [jQuery.fx.off](https://api.jquery.com/jQuery.fx.off/){data-tooltip="Globally disable all animations."}
- [jQuery.speed](https://api.jquery.com/jQuery.speed/){data-tooltip="Creates an object containing a set of properties ready to be used in the definition of custom animations."}
- [.queue()](https://api.jquery.com/queue/){data-tooltip="Show the queue of functions to be executed on the matched elements."}
- [jQuery.queue()](https://api.jquery.com/jQuery.queue/){data-tooltip="Show the queue of functions to be executed on the matched element."}
- [.stop()](https://api.jquery.com/stop/){data-tooltip="Stop the currently-running animation on the matched elements."}

{.marker-none .cols-3}

### Fading

<!-- prettier-ignore -->
- [.fadeIn()](https://api.jquery.com/fadeIn/){data-tooltip="Display the matched elements by fading them to opaque."}
- [.fadeOut()](https://api.jquery.com/fadeOut/){data-tooltip="Hide the matched elements by fading them to transparent."}
- [.fadeTo()](https://api.jquery.com/fadeTo/){data-tooltip="Adjust the opacity of the matched elements."}
- [.fadeToggle()](https://api.jquery.com/fadeToggle/){data-tooltip="Display or hide the matched elements by animating their opacity."}

{.marker-none .cols-3}

## jQuery Ajax

### Examples {.secondary .row-span-2}

```javascript
$.ajax({
  url: this.action,
  type: this.method,
  data: $(this).serialize(),
})
  .done(function (server_data) {
    console.log("success" + server_data);
  })
  .fail(function (jqXHR, status, err) {
    console.log("fail" + err);
  });
```

### Global Ajax Event Handlers

<!-- prettier-ignore -->
- [.ajaxComplete()](https://api.jquery.com/ajaxComplete/){data-tooltip="Register a handler to be called when Ajax requests complete. This is an AjaxEvent."}
- [.ajaxError()](https://api.jquery.com/ajaxError/){data-tooltip="Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event."}
- [.ajaxSend()](https://api.jquery.com/ajaxSend/){data-tooltip="Attach a function to be executed before an Ajax request is sent. This is an Ajax Event."}
- [.ajaxStart()](https://api.jquery.com/ajaxStart/){data-tooltip="Register a handler to be called when the first Ajax request begins. This is an Ajax Event."}
- [.ajaxStop()](https://api.jquery.com/ajaxStop/){data-tooltip="Register a handler to be called when all Ajax requests have completed. This is an Ajax Event."}
- [.ajaxSuccess()](https://api.jquery.com/ajaxSuccess/){data-tooltip="Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event."}

{.marker-none .cols-2}

### Helper Functions

<!-- prettier-ignore -->
- [jQuery.param()](https://api.jquery.com/jQuery.param/){data-tooltip="Create a serialized representation of an array, a plain object, or a jQuery object suitable for use in a URL query string or Ajax request. In case a jQuery object is passed, it should contain input elements with name/value properties."}
- [.serialize()](https://api.jquery.com/serialize/){data-tooltip="Encode a set of form elements as a string for submission."}
- [.serializeArray()](https://api.jquery.com/serializeArray/){data-tooltip="Encode a set of form elements as an array of names and values."}

{.marker-none .cols-2}

### Low-Level Interface

<!-- prettier-ignore -->
- [jQuery.ajax()](https://api.jquery.com/jQuery.ajax/){data-tooltip="Perform an asynchronous HTTP (Ajax) request."}
- [jQuery.prefilter()](https://api.jquery.com/jQuery.ajaxPrefilter/){data-tooltip="Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax()."}
- [jQuery.ajaxSetup()](https://api.jquery.com/jQuery.ajaxSetup/){data-tooltip="Set default values for future Ajax requests. Its use is not recommended."}
- [jQuery.ajaxTransport()](https://api.jquery.com/jQuery.ajaxTransport/){data-tooltip="Creates an object that handles the actual transmission of Ajax data."}

{.marker-none .cols-2}

### Shorthand Methods

<!-- prettier-ignore -->
- [jQuery.get()](https://api.jquery.com/jQuery.get/){data-tooltip="Load data from the server using a HTTP GET request."}
- [jQuery.getJSON()](https://api.jquery.com/jQuery.getJSON/){data-tooltip="Load JSON-encoded data from the server using a GET HTTP request."}
- [jQuery.getScript()](https://api.jquery.com/jQuery.getScript/){data-tooltip="Load a JavaScript file from the server using a GET HTTP request, then execute it."}
- [jQuery.post()](https://api.jquery.com/jQuery.post/){data-tooltip="Send data to the server using a HTTP POST request."}
- [.load()](https://api.jquery.com/load/){data-tooltip="Load data from the server and place the returned HTML into the matched elements."}

{.marker-none .cols-2}

## Miscellaneous

### jQuery Object

<!-- prettier-ignore -->
- [jQuery()](https://api.jquery.com/jQuery/){data-tooltip="Accepts a string containing a CSS selector which is then used to match a set of elements."}
- [jQuery.noConflict()](https://api.jquery.com/jQuery.noConflict/){data-tooltip="Relinquish jQuery&apos;s control of the $ variable."}
- [jQuery.sub()](https://api.jquery.com/jQuery.sub/){data-tooltip="Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object."}
- [jQuery.holdReady()](https://api.jquery.com/jQuery.holdReady/){data-tooltip="Holds or releases the execution of jQuery&apos;s ready event."}
- [jQuery.when()](https://api.jquery.com/jQuery.when/){data-tooltip="Provides a way to execute callback functions based on zero or more Thenable objects, usually Deferred objects that represent asynchronous events."}

{.marker-none .cols-2}

### Deferred Object {.row-span-2}

<!-- prettier-ignore -->
- [jQuery.Deferred()](https://api.jquery.com/jQuery.Deferred/){data-tooltip=" A factory function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function."}
- [deferred.always()](https://api.jquery.com/deferred.always/){data-tooltip=" Add handlers to be called when the Deferred object is either resolved or rejected. "}
- [deferred.done()](https://api.jquery.com/deferred.done/){data-tooltip=" Add handlers to be called when the Deferred object is resolved. "}
- [deferred.fail()](https://api.jquery.com/deferred.fail/){data-tooltip=" Add handlers to be called when the Deferred object is rejected. "}
- [deferred.isRejected()](https://api.jquery.com/deferred.isRejected/){data-tooltip=" Determine whether a Deferred object has been rejected. "}
- [deferred.isResolved()](https://api.jquery.com/deferred.isResolved/){data-tooltip=" Determine whether a Deferred object has been resolved. "}
- [deferred.notify()](https://api.jquery.com/deferred.notify/){data-tooltip=" Call the progressCallbacks on a Deferred object with the given args. "}
- [deferred.notifyWith()](https://api.jquery.com/deferred.notifyWith/){data-tooltip=" Call the progressCallbacks on a Deferred object with the given context and args. "}
- [deferred.pipe()](https://api.jquery.com/deferred.pipe/){data-tooltip=" Utility method to filter and/or chain Deferreds.  "}
- [deferred.progress()](https://api.jquery.com/deferred.progress/){data-tooltip=" Add handlers to be called when the Deferred object generates progress notifications."}
- [deferred.promise()](https://api.jquery.com/deferred.promise/){data-tooltip=" Return a Deferred&apos;s Promise object. "}
- [deferred.reject()](https://api.jquery.com/deferred.reject/){data-tooltip=" Reject a Deferred object and call any failCallbacks with the given args. "}
- [deferred.rejectWith()](https://api.jquery.com/deferred.rejectWith/){data-tooltip=" Reject a Deferred object and call any failCallbacks with the given context and args. "}
- [deferred.resolve()](https://api.jquery.com/deferred.resolve/){data-tooltip=" Resolve a Deferred object and call any doneCallbacks with the given args. "}
- [deferred.resolveWith()](https://api.jquery.com/deferred.resolveWith/){data-tooltip=" Resolve a Deferred object and call any doneCallbacks with the given context and args. "}
- [deferred.state()](https://api.jquery.com/deferred.state/){data-tooltip="Determine the current state of a Deferred object. "}
- [deferred.then()](https://api.jquery.com/deferred.then/){data-tooltip="Add handlers to be called when the Deferred object is resolved, rejected, or still in progress. "}
- [.promise()](https://api.jquery.com/promise/){data-tooltip=" Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished. "}

{.marker-none .cols-2}

### Utilities {.row-span-3}

<!-- prettier-ignore -->
- [jQuery.boxModel](https://api.jquery.com/jQuery.boxModel/){data-tooltip="States if the current page, in the user&apos;s browser, is being rendered using the W3C CSS Box Model."}
- [jQuery.browser](https://api.jquery.com/jQuery.browser/){data-tooltip="Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead."}
- [jQuery.contains()](https://api.jquery.com/jQuery.contains/){data-tooltip="Check to see if a DOM element is a descendant of another DOM element."}
- [jQuery.each()](https://api.jquery.com/jQuery.each/){data-tooltip="A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function&apos;s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties."}
- [jQuery.extend()](https://api.jquery.com/jQuery.extend/){data-tooltip="Merge the contents of two or more objects together into the first object."}
- [jQuery.globalEval()](https://api.jquery.com/jQuery.globalEval/){data-tooltip="Execute some JavaScript code globally."}
- [jQuery.grep()](https://api.jquery.com/jQuery.grep/){data-tooltip="Finds the elements of an array which satisfy a filter function. The original array is not affected."}
- [jQuery.inArray()](https://api.jquery.com/jQuery.inArray/){data-tooltip="Search for a specified value within an array and return its index (or -1 if not found)."}
- [jQuery.isArray()](https://api.jquery.com/jQuery.isArray/){data-tooltip="Determine whether the argument is an array."}
- [jQuery.isEmptyObject()](https://api.jquery.com/jQuery.isEmptyObject/){data-tooltip="Check to see if an object is empty (contains no enumerable properties)."}
- [jQuery.isFunction()](https://api.jquery.com/jQuery.isFunction/){data-tooltip="Determines if its argument is callable as a function."}
- [jQuery.isNumeric()](https://api.jquery.com/jQuery.isNumeric/){data-tooltip="Determines whether its argument represents a JavaScript number."}
- [jQuery.isPlainObject()](https://api.jquery.com/jQuery.isPlainObject/){data-tooltip="Check to see if an object is a plain object."}
- [jQuery.isWindow()](https://api.jquery.com/jQuery.isWindow/){data-tooltip="Determine whether the argument is a window."}
- [jQuery.isXMLDoc()](https://api.jquery.com/jQuery.isXMLDoc/){data-tooltip="Check to see if a DOM node is within an XML document (or is an XML document)."}
- [jQuery.makeArray()](https://api.jquery.com/jQuery.makeArray/){data-tooltip="Convert an array-like object into a true JavaScript array."}
- [jQuery.map()](https://api.jquery.com/jQuery.map/){data-tooltip="Translate all items in an array or object to new array of items."}
- [jQuery.merge()](https://api.jquery.com/jQuery.merge/){data-tooltip="Merge the contents of two arrays together into the first array. "}
- [jQuery.noop()](https://api.jquery.com/jQuery.noop/){data-tooltip="An empty function."}
- [jQuery.now()](https://api.jquery.com/jQuery.now/){data-tooltip="Return a number representing the current time."}
- [jQuery.parseHTML()](https://api.jquery.com/jQuery.parseHTML/){data-tooltip="Parses a string into an array of DOM nodes."}
- [jQuery.parseJSON()](https://api.jquery.com/jQuery.parseJSON/){data-tooltip="Takes a well-formed JSON string and returns the resulting JavaScript value."}
- [jQuery.parseXML()](https://api.jquery.com/jQuery.parseXML/){data-tooltip="Parses a string into an XML document."}
- [jQuery.proxy()](https://api.jquery.com/jQuery.proxy/){data-tooltip="Takes a function and returns a new one that will always have a particular context."}
- [jQuery.support](https://api.jquery.com/jQuery.support/){data-tooltip="A collection of properties that represent the presence of different browser features or bugs. Intended for jQuery&apos;s internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance. For your own project&apos;s feature-detection needs, we strongly recommend the use of an external library such as Modernizr instead of dependency on properties in jQuery.support."}
- [jQuery.trim()](https://api.jquery.com/jQuery.trim/){data-tooltip="Remove the whitespace from the beginning and end of a string."}
- [jQuery.type()](https://api.jquery.com/jQuery.type/){data-tooltip="Determine the internal JavaScript [[Class]] of an object."}
- [jQuery.unique()](https://api.jquery.com/jQuery.unique/){data-tooltip="Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."}
- [jQuery.uniqueSort()](https://api.jquery.com/jQuery.uniqueSort/){data-tooltip="Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."}

{.marker-none .cols-2}

### DOM Element Methods

<!-- prettier-ignore -->
- [.get()](https://api.jquery.com/get/){data-tooltip="Retrieve one of the elements matched by the jQuery object."}
- [.index()](https://api.jquery.com/index/){data-tooltip="Search for a given element from among the matched elements."}
- [.size()](https://api.jquery.com/size/){data-tooltip="Return the number of elements in the jQuery object."}
- [.toArray()](https://api.jquery.com/toArray/){data-tooltip="Retrieve all the elements contained in the jQuery set, as an array."}

{.marker-none .cols-2}

### Internals

<!-- prettier-ignore -->
- [.jquery](https://api.jquery.com/jquery-2/){data-tooltip="A string containing the jQuery version number."}
- [.context](https://api.jquery.com/context/){data-tooltip="The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document."}
- [jQuery.error()](https://api.jquery.com/jQuery.error/){data-tooltip="Takes a string and throws an exception containing it."}
- [.length](https://api.jquery.com/length/){data-tooltip="The number of elements in the jQuery object."}
- [.pushStack()](https://api.jquery.com/pushStack/){data-tooltip="Add a collection of DOM elements onto the jQuery stack."}
- [.selector](https://api.jquery.com/selector/){data-tooltip="A selector representing selector passed to jQuery(), if any, when creating the original set."}

{.marker-none .cols-2}

### Callbacks Object

<!-- prettier-ignore -->
- [jQuery.Callbacks()](https://api.jquery.com/jQuery.Callbacks/){data-tooltip="A multi-purpose callbacks list object that provides a powerful way to manage callback lists."}
- [callbacks.add()](https://api.jquery.com/callbacks.add/){data-tooltip="Add a callback or a collection of callbacks to a callback list."}
- [callbacks.disable()](https://api.jquery.com/callbacks.disable/){data-tooltip="Disable a callback list from doing anything more."}
- [callbacks.disabled()](https://api.jquery.com/callbacks.disabled/){data-tooltip="Determine if the callbacks list has been disabled."}
- [callbacks.empty()](https://api.jquery.com/callbacks.empty/){data-tooltip="Remove all of the callbacks from a list."}
- [callbacks.fire()](https://api.jquery.com/callbacks.fire/){data-tooltip="Call all of the callbacks with the given arguments."}
- [callbacks.fired()](https://api.jquery.com/callbacks.fired/){data-tooltip="Determine if the callbacks have already been called at least once."}
- [callbacks.fireWith()](https://api.jquery.com/callbacks.fireWith/){data-tooltip="Call all callbacks in a list with the given context and arguments."}
- [callbacks.has()](https://api.jquery.com/callbacks.has/){data-tooltip="Determine whether or not the list has any callbacks attached. If a callback is provided as an argument, determine whether it is in a list."}
- [callbacks.lock()](https://api.jquery.com/callbacks.lock/){data-tooltip="Lock a callback list in its current state."}
- [callbacks.locked()](https://api.jquery.com/callbacks.locked/){data-tooltip="Determine if the callbacks list has been locked."}
- [callbacks.remove()](https://api.jquery.com/callbacks.remove/){data-tooltip="Remove a callback or a collection of callbacks from a callback list."}

{.marker-none .cols-2}
