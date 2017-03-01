import template from "./colors.html";
import "./bgcolor";

function Shade(color, css) {
    var arr = ['background-color', color.name];
    if (css != null) arr.push(css);
    this.css = arr.join('-');
    this.name = css;
}

function Color(name) {
    this.name = name;
    this.shades = [
        new Shade(this, 'lightest'),
        new Shade(this, 'lighter'),
        new Shade(this, 'light'),
        new Shade(this, null),
        new Shade(this, 'dark'),
        new Shade(this, 'darker'),
        new Shade(this, 'darkest')
    ]
}

function ColorsController($routeParams) {
    var gray = new Color('gray');
    gray.shades.splice(0, 1, new Shade(gray, 'lightest2'));

    this.rows = [
        [
            new Color('red'),
            new Color('orange'),
            new Color('yellow'),
            new Color('green'),
        ],
        [
            new Color('blue'),
            new Color('purple'),
            gray
        ]
    ];

    this.getColor = function ($element) {
        console.log('getColor', $element);
    }
}

var name = Angular.module("demo").controller('colorsController', ColorsController);

var routes = {
    "/colors": {
        template: template,
        controller: name,
        controllerAs: 'vm'
    }
}

export {
    routes
}