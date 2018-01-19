
<p align="center">
    <img src="https://raw.githubusercontent.com/m3esma/vue-easy-tinymce/master/examples/logo.png">
</p>

# vue-easy-tinymce

[![GitHub release](https://img.shields.io/github/release/m3esma/vue-easy-tinymce.svg?style=flat-square&colorB=brightgreen)](https://github.com/m3esma/vue-easy-tinymce/releases)
[![NPM Downloads](https://img.shields.io/npm/dt/vue-easy-tinymce.svg?style=flat-square)](https://www.npmjs.com/package/vue-easy-tinymce)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![File Size](http://img.badgesize.io/https://raw.githubusercontent.com/m3esma/vue-easy-tinymce/master/dist/vue-easy-tinymce.min.js.svg?style=flat-square)](https://raw.githubusercontent.com/m3esma/vue-easy-tinymce/master/dist/vue-easy-tinymce.min.js)
[![GitHub issues](https://img.shields.io/github/issues/m3esma/vue-easy-tinymce.svg?style=flat-square)](https://github.com/m3esma/vue-easy-tinymce/issues)
[![GitHub forks](https://img.shields.io/github/forks/m3esma/vue-easy-tinymce.svg?style=flat-square)](https://github.com/m3esma/vue-easy-tinymce/network)
[![GitHub stars](https://img.shields.io/github/stars/m3esma/vue-easy-tinymce.svg?style=flat-square)](https://github.com/m3esma/vue-easy-tinymce/stargazers)
[![made_with love](https://img.shields.io/badge/made_with-♥-red.svg?style=flat-square)](https://github.com/m3esma/vue-easy-tinymce)


> A simple and powerful package for easy usage of tinymce in [Vue.js](https://vuejs.org) project.

## Features

- [x] v-model Support
- [x] Multiple instance editor support
- [x] Configurable options
- [x] Binding initial content (from v-model)



## Installation

Run the command below to install this package:
```sh
npm install vue-easy-tinymce --save
```

Or

[Download](https://github.com/m3esma/vue-easy-tinymce/releases) or clone this repository and copy `dist/vue-easy-tinymce.min.js` file to your project.

Or

Use CDN provider:

```html
<script src="https://cdn.jsdelivr.net/npm/vue-easy-tinymce/dist/vue-easy-tinymce.min.js"></script>
```


## Usage
In the first step, put `vue-easy-tinymce` in your project.

#### Node.js Bundler (Webpack, Rollup, Browserify)
```javascript
window.Vue = require('vue'); // npm install vue --save
//... etc data or package(s)
var VueEasyTinyMCE = require('vue-easy-tinymce');
```

#### Browser loading
```html
<script src="examples/tinymce/tinymce.min.js"></script> <!-- TinyMCE core -->
<!-- Or CDN <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.4/tinymce.min.js"></script> -->

<script src="examples/vue/vue.min.js"></script> <!-- Vue.js core -->
<!-- Or CDN <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->

<script src="dist/vue-easy-tinymce.min.js"></script> <!-- VueEasyTinyMCE module-->
<!-- Or CDN <script src="https://cdn.jsdelivr.net/npm/vue-easy-tinymce/dist/vue-easy-tinymce.min.js"></script> -->

<script src="examples/index.js"></script> <!-- Your project js code -->
```
In the next step, use the `VueEasyTinyMCE` in vue instance as a component

```javascript
new Vue({
    // ,...
    components: {
        // <tinymce> tag available in parent's template
        'tinymce': VueEasyTinyMCE
    },
    data: {
        /* Your data and models here */
        myModel: '<p>initial value</p>',

        /* Config can be declare here */
        myPlugins : [],
        myToolbar1: '',
        myToolbar2 : '',
        myOtherOptions : {}
    }
    // ,...
});
```
Or

```javascript
Vue.component('tinymce', VueEasyTinyMCE);
new Vue({
    // ...
});
```


#### Config
The VueEasyTinyMCE configuration can be defined in:
1. Inside Vue instance in data section.
Example:
Explained in above.
2. Inside `<script></script>` tag in above of component.
Example:
```html
<script>var configToolbar1 = 'undo redo | bold';</script>
<tinymce :toolbar1="configToolbar1"></tinymce>
```
3. Inside `<tinymce></tinymce>` By binding value directly.
Example:
```html
<tinymce :toolbar1="'undo redo | bold'"></tinymce>
```

##### props
|  Prop | Type  | Default | Required |
| ------------ | ------------ | ------------ | ------------ |
|  `:plugins`  | Array | [ ] | No |
| `:toolbar1` |  String | ' ' | No |
| `:toolbar2` | String  | ' ' | No |
| `:other` | Object | { } | No |

Config value example:
```javascript
var myPlugins = [
    'advlist autolink lists link image charmap print preview anchor textcolor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code directionality template colorpicker textpattern'
];

var myToolbar1 = 'undo redo | bold italic strikethrough | forecolor backcolor | template link | bullist numlist | ltr rtl | removeformat';

var myToolbar2 = '';

var myOtherOptions = {
    height: 200,
    templates: [
        {title: 'Test template 1', content: 'Test 1'},
        {title: 'Test template 2', content: 'Test 2'}
    ]
    //,content_css: 'css/tinymce-content.css'
    //,width:600,
    //directionality: 'rtl',
    //theme: 'modern',
    //menubar: false
    //, etc...
};
```
Finally, you can easily use the `<tinymce></tinymce>` in your own view.
```html
<tinymce v-model="myModel"
    :plugins="myPlugins" :toolbar1="myToolbar1" :toolbar2="myToolbar2"
    :other="myOtherOptions">
</tinymce>
```


## Example
At first read the [Usage](#usage) section and then follow below code:

#### index.js
```javascript
new Vue({
    el: '#app',
    data: {
        /* Your data and models here */
        myModel: '<p><span style="color: #ff0000;">Initial Value</span></p>',

        /* Config can be declare here */
        myPlugins : [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code directionality template colorpicker textpattern'
        ],
        myToolbar1: 'undo redo | bold italic strikethrough | forecolor backcolor | template link | bullist numlist | ltr rtl | removeformat',
        myToolbar2 : '',
        myOtherOptions : {
            height: 200,
            templates: [
                {title: 'Test template 1', content: 'Test 1'},
                {title: 'Test template 2', content: 'Test 2'}
            ],
            content_css: 'css/tinymce-content.css'
            //,width:600,
            //directionality: 'rtl',
            //theme: 'modern',
            //menubar: false
            //, etc...
        }
    },
    components: {
        'tinymce': VueEasyTinyMCE
    },
    methods: {
        getModelValue: function () {
            alert(this.myModel);
        },
        changeModelValue: function () {
            this.myModel = '<p>Change value programmability</p>';
        },
        clearModelValue: function () {
            this.myModel = '';
        }
    }
});
```

#### index.html
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue-easy-tinymce</title>

    <link rel="stylesheet" href="css/style.css">

</head>
<body>


<div id="app">
    <img src="logo.png">

    <tinymce v-model="myModel"
             :plugins="myPlugins" :toolbar1="myToolbar1" :toolbar2="myToolbar2"
             :other="myOtherOptions">
    </tinymce>

    <br>
    <button @click="getModelValue()">Get current model value</button>
    <button @click="changeModelValue()">Change model value programmability</button>
    <button @click="clearModelValue()">Clear model value</button>

    <br><br>
    <a target="_blank" href="https://github.com/m3esma/vue-easy-tinymce">vue-easy-tinymce</a>

</div>


<script src="tinymce/tinymce.min.js"></script> <!-- TinyMCE core -->
<!-- Or CDN <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.4/tinymce.min.js"></script> -->

<script src="vue/vue.min.js"></script> <!-- Vue.js core -->
<!-- Or CDN <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->

<script src="../dist/vue-easy-tinymce.min.js"></script> <!-- VueEasyTinyMCE module-->
<!-- Or CDN <script src="https://cdn.jsdelivr.net/npm/vue-easy-tinymce/dist/vue-easy-tinymce.min.js"></script> -->

<script src="index.js"></script> <!-- Your project js code -->


</body>
</html>
```
In the above example, you can use node package manager (npm) instead of scripts. it explained in the [Usage](#usage) section.



## Demo

![screenshot](https://raw.githubusercontent.com/m3esma/vue-easy-tinymce/master/examples/screenshot.png "screenshot")

[Download](https://github.com/m3esma/vue-easy-tinymce/releases) or clone this respository and open `index.html` or `index2.html` in examples directory.



## Contribute
If you have a feature request, please add it as an issue or make a pull request.


## Authors

**Mehdi Esmaeili**

- [Github](https://github.com/m3esma)
- [LinkedIn](https://www.linkedin.com/in/m3esma)
- [Twitter](https://twitter.com/m3esma)
- [Gmail](mailto:m3esma@gmail.com)


## License
Released under the [MIT License](LICENSE).
