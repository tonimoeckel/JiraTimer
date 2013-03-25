/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 23:08
 * To change this template use File | Settings | File Templates.
 */

Ext.define("JT.view.button.Back", {

    extend: 'Ext.button.Button',

    alias: 'widget.backbutton',

    iconCls: 'back',
    text: 'Back',

    initComponent: function() {

        var me = this;

        me.callParent();

    }
});