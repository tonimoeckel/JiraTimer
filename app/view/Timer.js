Ext.define("JT.view.Timer", {
    extend: 'Ext.panel.Panel',

    alias: 'widget.timer',

    requires:[
        'Ext.layout.container.Anchor',

        'Ext.ux.timer.Watch',
        'Ext.ux.layout.Center',
        'Ext.ux.toggleslide.ToggleSlide',

        'JT.view.SelectIssueButton'
    ],

    title: 'Jira Timer',

    layout: 'anchor',

    bodyPadding: 20,

    items:[
        {
            xtype: 'selectissuebutton',
            anchor: '100%',
            text: 'Vorgang wählen'
        },
        {
            xtype: 'watch'
        },
        {
            xtype: 'toolbar',
            anchor: '100%',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'reset',
                    action: 'reset'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'toggleslide'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    iconCls: 'send',
                    action: 'send'
                }
            ]
        }
    ],
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
});