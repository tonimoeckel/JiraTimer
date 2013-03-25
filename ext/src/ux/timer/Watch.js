/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 13:10
 * To change this template use File | Settings | File Templates.
 */

/**
 * A watch
 */
Ext.define('Ext.ux.timer.Watch', {
    extend: 'Ext.container.Container',

    alias: 'widget.watch',

    requires: [
        'Ext.form.Label'
    ],

    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },

    padding: '20 0',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me,{
            items : [
                {
                    xtype: 'label',
                    text: '00',
                    action: 'hours'
                },
                {
                    xtype: 'label',
                    text: ':'
                },
                {
                    xtype: 'label',
                    text: '00',
                    action: 'minutes'
                },
                {
                    xtype: 'label',
                    text: ':'
                },
                {
                    xtype: 'label',
                    text: '00',
                    action: 'seconds'
                }

            ]
        });

        me.callParent();

    },

    /**
     * Set time in Seconds
     * @param {int} seconds
     */
    setTime: function(seconds){

    }
});