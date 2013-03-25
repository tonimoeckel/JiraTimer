/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 16:31
 * To change this template use File | Settings | File Templates.
 */

Ext.define('JT.store.Projects', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ProjectsStore',
            proxy: {
                type: 'rest',
                url: 'filter/favourite',
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});