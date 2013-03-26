/**
 * Controls anything on the Time (Home-View)
 */

Ext.define('JT.controller.Timer', {
    extend: 'Ext.app.Controller',

    requires: [
        'JT.view.button.Back'
    ],

    views: [
        'JT.view.grid.Projects',
        'JT.view.SelectIssueButton',
        'JT.view.Timer',
        'JT.view.grid.Projects'
    ],

    models: [
        'Session',
        'Issue'
    ],

    stores: [
        'Sessions'
    ],


    onAfterTimerRender: function(timer){
        var me = this;
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },
            function(tabs){

                var params = Ext.Object.fromQueryString(tabs[0].url,true),
                    issueKey = params.selectedIssue,
                    sessions = Ext.create('JT.store.Sessions');
                    sessionRecord = sessions.findRecord('issue_id',issueKey);

                if (!sessionRecord){
                    sessionRecord = me.getModel('Session').create({
                        issue_id: issueKey
                    });
                }

                timer.setRecord(sessionRecord);
            }
        );

    },

    /**
     * Fires when a "add account" button has been clicked
     * @param {Ext.button.Button} button
     * @param {Event} e The click event
     */
    onSelectIssueButtonClick: function(button){

        // Get main - Panel
        var main = button.up('main'),
            projectsgrid = Ext.create('JT.view.grid.Projects',{
                title: 'Projects',
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'backbutton'
                            }
                        ]
                    }
                ]
            }),
            layout = main.getLayout(),
            timer = layout.getActiveItem();

        main.add(projectsgrid);
        main.getLayout().setActiveItem(projectsgrid,'left');
    },



    /**
     * @event when timer toggle is on or off
     * @param {Ext.form.Checkbox} toggle
     * @param {Boolean|String} state the new toggle state value
     */
    onToggleChange: function(toggle,state){
        var timer = toggle.up('timer');
        state ? timer.start() : timer.stop();
    },



    init: function() {
        this.control({
            'timer': {
                afterrender: this.onAfterTimerRender
            },
            'timer selectissuebutton': {
                click: this.onSelectIssueButtonClick
            },
            'timer toggleslide': {
                change: this.onToggleChange
            }
        });
    }



});