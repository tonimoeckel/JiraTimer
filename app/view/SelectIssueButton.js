/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 18:08
 * To change this template use File | Settings | File Templates.
 */
Ext.define("JT.view.SelectIssueButton", {

    extend: 'Ext.button.Split',

    alias: 'widget.selectissuebutton',

    text: 'Vorgang wählen',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me,{
            menu: [
                {
                    text: 'Projects'
                },
                {
                    text: 'Filter'
                }
            ]
        });

        me.callParent();

    }
});