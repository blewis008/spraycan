var spraycan = require('./index.js');
var tag = spraycan.tag;
var html = spraycan.html;
var div = spraycan.div;

var successes = [];
var failures = [];

assert('tag returns a function', function () { return typeof tag('test') === 'function' })
assert('html tag returns correct markup', function () { return html() === '<html></html>' })
assert('if first arg is an array, the array becomes attributes', function () {
    var output = div(['class="content"'], 'test')
    return output.replace(/\n/g, '') === '<div class="content">test</div>'
})
assert('if attributes array contains class shorthand, it is expanded to full class', function () {
    var output = div(['.content'], 'test');
    return output.replace(/\n/g, '') === '<div class="content">test</div>'
})
assert('if attributes array contains id shorthand, it is expanded to full id', function () {
    var output = div(['#content'], 'test');
    return output.replace(/\n/g, '') === '<div id="content">test</div>'
})

console.log('SUCCESS: ' + successes.length + ' tests');
console.log('FAILURE: ' + failures.length + ' tests');
if (failures.length > 0) {
    console.log('\n  ' + failures.join('\n  '));
    console.log('\n');
}

function assert (test, func) {
    try {
        var result = func();
        if (result) {
            successes.push(test);
        } else {
            failures.push(test);
        }
    } catch (e) {
        failures.push(test + ' (exception)');
        console.log(e);
    }
}