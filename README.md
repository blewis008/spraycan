# spraycan (beta)

`spraycan` is a simple and lightweight library for generating markup using pure JavaScript.

## Usage

```javascript
var spraycan = require('spraycan');
var body = spraycan.body;
var div = spraycan.div;
var h1 = spraycan.h1;

var markup = body(
    div(['class="header"',
        h1("My Title")
    ),
    div('content'),
    div(['id="footer"', 'footer')
);

//<body>
//  <div class="header">
//    <h1>My Title</h1>
//  </div>
//  <div>content</div>
//  <div id="footer">footer</div>
//</body>
```

You can generate custom tags by using the included tag function:

```javascript
var spraycan = require('spraycan');
var div = spraycan.div;

var tag = spraycan.tag;
var myCustomTag = tag('my-custom-tag');

var markup = div(
    myCustomTag('some text')
);

//<div>
//  <my-custom-tag>some text</my-custom-tag>
//</div>
```

## Why?

`spraycan` arose out of a desire to generate static markup for my blog. I only wanted to use React's `renderToStaticMarkup` function, but doing so required several libraries, and I could never actually get `gulp` to understand JSX. Thus, `spraycan` was born - no dependencies and trivial to use.

## Name

spraycans are used in graffiti -> tagging -> HTML tags -> *groan*.