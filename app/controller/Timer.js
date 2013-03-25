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


    onAfterTimerRender: function(timer){

        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },
            function(tabs){

                var selectissuebutton = timer.down('selectissuebutton'),
                    params = Ext.Object.fromQueryString(tabs[0].url,true),
                    issueKey = params.selectedIssue;

                selectissuebutton.setText(issueKey);

        });

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



    init: function() {
        this.control({
            'timer': {
                afterrender: this.onAfterTimerRender
            },
            'timer selectissuebutton': {
                click: this.onSelectIssueButtonClick
            }
        });
    }



});