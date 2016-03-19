function tag (name) {
    return function () {
        var openTag = '<' + name + '>';
        var closeTag = '</' + name + '>';
        var args = [].slice.call(arguments);
        if (args.length === 0) {
            return openTag + closeTag;
        } else {
            if (Array.isArray(args[0])) {
                for (var i = 0; i < args[0].length; i++) {
                    var attribute = args[0][i];
                    if (attribute.indexOf('=') === -1 && attribute.indexOf('#') === 0) {
                        args[0][i] = 'id="' + attribute.substr(1, attribute.length) + '"';
                    } else if (attribute.indexOf('=') === -1 && attribute.indexOf('.') === 0) {
                        args[0][i] = 'class="' + attribute.substr(1, attribute.length) + '"';
                    }
                }
                openTag = '<' + name + ' ' + args[0].join(' ') + '>';
                args.shift();
            }

            return openTag + args.join('') + closeTag;
        }
    };
}

function link (href) {
    return '<link rel="stylesheet" type="text/css" href="' + href + '">';
}

function rule (selector, props) {
    return selector + ' {' + props.join(';') + '}';
}

function meta (args) {
    if (Array.isArray(args)) {
        return '<meta ' + args.join(' ') + '>';
    } else {
        return '<meta ' + args + '>';
    }
}

module.exports = {
    tag: tag,
    meta: meta,
    rule: rule,
    link: link,
    html: tag('html'),
    head: tag('head'),
    title: tag('title'),
    style: tag('style'),
    body: tag('body'),
    h1: tag('h1'),
    h2: tag('h2'),
    h3: tag('h3'),
    h4: tag('h4'),
    h5: tag('h5'),
    h6: tag('h6'),
    div: tag('div'),
    span: tag('span'),
    p: tag('p'),
    ul: tag('ul'),
    li: tag('li'),
    a: tag('a'),
    svg: tag('svg'),
    path: tag('path'),
    img: tag('img')
};