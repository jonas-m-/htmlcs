module.exports = {

    name: 'css-in-head',

    desc: 'All css contents are recommended to be imported in <head>.',

    lint: function (enable, document, reporter) {
        if (!enable) {
            return;
        }

        var head = document.querySelector('head');

        document.querySelectorAll('link[rel="stylesheet"], style').forEach(function (css) {
            if (!(head && head.contains(css))) {
                reporter.warn(css, 'Css contents are recommended to be imported in <head>.');
            }
        });
    }

};