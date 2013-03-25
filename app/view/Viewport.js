Ext.define('JT.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'JT.view.Main'
    ],

    layout: 'fit',

    items: [
        {
            xtype: 'main'
        }
    ]
});