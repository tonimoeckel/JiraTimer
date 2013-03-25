/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 18:32
 * To change this template use File | Settings | File Templates.
 */
Ext.define("JT.view.grid.Projects", {
    extend: 'Ext.grid.Panel',

    alias: 'widget.projectsgrid',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me,{
            columns: [

            ]
        });

        me.callParent();

    }
});