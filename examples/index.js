/** Example 2
 * Vue instance
 *
 */
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
