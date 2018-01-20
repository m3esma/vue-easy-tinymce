/*!
 * vue-easy-tinymce v1.0.2
 * Copyright (c) 2018-present Mehdi Esmaeili (@m3esma)
 * Released under the MIT License.
 * Project: https://github.com/m3esma/vue-easy-tinymce
 */

var VueEasyTinyMCE = {

    //declare the props
    props: {
        id: {type: String, default: 'editor'},
        value: {default: ''},
        toolbar1: {default: ''},
        toolbar2: {default: ''},
        plugins: {
            default: function () {
                return [];
            }, type: Array
        },
        other: {
            default: function () {
                return {};
            }, type: Object
        }
    },

    data: function () {
        return {
            objTinymce: null
        }
    },

    //template: '<div><textarea rows="10" v-bind:value="value"></textarea></div>', //inside a div
    template: '<textarea :id="computedId" :value="value"></textarea>',

    computed: {
        //for multi instance support
        computedId: function () {
            if (this.id === 'editor' || this.id === '' || this.id === null) {
                return 'editor-' + this.guidGenerator(); //put default value on computedId
            } else {
                return this.id;
            }
        }
    },

    mounted: function () {

        var component = this;
        var initialOptions = {
            //target: this.$el.children[0], //(when textarea template is inside a element like a div)
            target: this.$el,
            toolbar1: this.toolbar1,
            toolbar2: this.toolbar2,
            plugins: this.plugins,
            init_instance_callback: function (editor) {
                editor.on('Change KeyUp Undo Redo', function (e) {
                    component.updateValue(editor.getContent());
                });
                //editor.setContent(component.value); //use instead :value="value"
                //alert("init");
                component.objTinymce = editor;
            }
        };

        var options = Object.assign({}, initialOptions, this.other);
        tinymce.init(options);
    },

    methods: {
        guidGenerator: function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        },
        updateValue: function (value) {
            this.$emit('input', value);
        }
    },

    watch: {
        value: function (newValue, oldValue) {
            // if v-model content change programmability
            if (this.value !== this.objTinymce.getContent())
                this.objTinymce.setContent(this.value);
        }
    }

};

//Support node.js
if (typeof module !== 'undefined' && module.exports)
    module.exports = VueEasyTinyMCE;
