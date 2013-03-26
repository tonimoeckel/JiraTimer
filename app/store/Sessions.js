/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 16:31
 * To change this template use File | Settings | File Templates.
 */

Ext.define('JT.store.Sessions', {
    extend: 'Ext.data.Store',

    uses: [
        'JT.model.Session'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'JT.model.Session'

        }, cfg)]);
    }
});