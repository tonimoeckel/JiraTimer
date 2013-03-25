Ext.define("JT.view.Main", {
    extend: 'Ext.panel.Panel',

    requires:[
        'Ext.layout.container.Card',
        //'JT.override.layout.container.Card',
        'JT.view.Timer'
    ],

    alias: 'widget.main',

    cardSwitchAnimation: 'slide',
    layout: 'card',//http://try.sencha.com/extjs/4.1.1/community/carouselcontainer/

    items:[
        {
            xtype: 'timer'
        }
    ]
});