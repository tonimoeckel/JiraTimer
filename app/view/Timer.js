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

    /**
     * Initialize with session record
     * {JT.model.Session}
     */
    record: null,

    initComponent: function() {

        var me = this;


        Ext.applyIf(me,{
            items:[
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
                },
                {
                    xtype: 'selectissuebutton',
                    margin: '20 0',
                    anchor: '100%',
                    text: 'Vorgang wählen'
                },
                {
                    xtype: 'label',
                    anchor: '100%',
                    action: 'issueDescription',
                    text: 'Please select an issue'
                }
            ]
        });

        me.callParent();

    },

    /**
     * Set Session
     * @param {JT.model.Session} record
     */
    setRecord: function(record){
        var me = this,
            toggleslide = me.down('toggleslide');
        me.record = record;

        // Further configs
        me.down('selectissuebutton').setText(record.getIssue().get('key'));
        me.down('label[action=issueDescription]').setText(record.getIssue().get('title'));
        if (toggleslide.getValue()!=record.get('active')){
            toggleslide.toggle();
        }


    },

    /**
     * Get Session
     * @returns {JT.model.Session}
     */
    getRecord: function(){
        return this.record;
    },


    /**
     * Starts Timer - Session
     */
    start: function(){

        var session = this.record;
        // Exception
        if (!session){
            Ext.log({
                msg: 'No Session Selected',
                level: 'error'
            });
        }

        session.set({
            'startdate':new Date(),
            'active': true
        });

        session.save();

    },

    stop: function(){

    }



});