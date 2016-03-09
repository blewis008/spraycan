# spraycan (beta)

`spraycan` is a simple and lightweight library for generating markup using pure JavaScript.

## Usage

```javascript
var spraycan = require('spraycan');
var div = spraycan.div;

var markup = div('philly cheesesteak');         // <div>philly cheesesteak</div>
```

Nesting elements works as expected. Comma-separated elements will be siblings:

```javascript
var spraycan = require('spraycan');
var ul = spraycan.ul;
var li = spraycan.li;

var markup = ul(                                // <ul>
    li('slice of rye bread'),                   //   <li>slice of rye bread</li>
    li('provolone cheese'),                     //   <li>provolone cheese</li>
    li('basil pesto'),                          //   <li>basil pesto</li>
    li('romaine lettuce'),                      //   <li>romaine lettuce</li>
    li('turkey'),                               //   <li>turkey</li>
    li('slice of rye bread')                    //   <li>slice of rye bread</li>
);                                              // </ul>
```

If the first parameter is an array, the elements in the array become attributes:

```javascript
var spraycan = require('spraycan');
var body = spraycan.body;
var div = spraycan.div;
var h1 = spraycan.h1;

var markup = body(                              // <body>
    div(['class="header"'],                     //   <div class="header">
        h1(['style="color: #00e;"'], 'Title')   //     <h1 style="color: #00e;">Title</h1>
    ),                                          //   </div>
    div('content'),                             //   <div>content</div>
    div(['id="footer"'], 'footer')              //   <div id="footer">footer</div>
);                                              // </body>
```

...and you can use a shorthand syntax for ID and class:

```javascript
var spraycan = require('spraycan');
var body = spraycan.body;
var div = spraycan.div;
var h1 = spraycan.h1;

var markup = body(                              //<body>
    div(['.header'],                            //  <div class="header">
        h1(['.header-title'], 'My Title')       //    <h1 class="header-title">My Title</h1>
    ),                                          //  </div>
    div('content'),                             //  <div>content</div>
    div(['#footer', '.footer'], 'footer')       //  <div id="footer" class="footer">footer</div>
);                                              //</body>
```

You can generate custom tags by using the `tag` function:

```javascript
var spraycan = require('spraycan');
var div = spraycan.div;

var tag = spraycan.tag;
var myCustomTag = tag('my-custom-tag');

var markup = div(                               // <div>
    myCustomTag('some text')                    //   <my-custom-tag>some text</my-custom-tag>
);                                              // </div>
```

## Why?

`spraycan` arose out of a desire to generate static markup for my blog. I only wanted to use React's `renderToStaticMarkup` function, but doing so required several libraries, and I could never actually get `gulp` to understand JSX. Thus, `spraycan` was born - no dependencies and trivial to use.

## Name

spraycans are used in graffiti -> tagging -> HTML tags -> *groan*.

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)