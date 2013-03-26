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

    initComponent: function() {

        var me = this;

        Ext.applyIf(me,{
            items:[
                {
                    xtype: 'timer',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'addAccount',
                                    action: 'addAccount'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent();

    }

});

