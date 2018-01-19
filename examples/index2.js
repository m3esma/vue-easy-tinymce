/** Example 1
 * Vue instance
 *
 */
new Vue({
    el: '#app',
    data: {
        /* Your data and models here */
        myModel: '<p><span style="color: #ff0000;">Initial Value</span></p>'
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
