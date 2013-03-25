/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('JT.model.Project', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'key'},
        {name: 'name'},
        {name: 'self'},
        {name: 'avatar', mapping: 'avatarUrls.16x16'}
    ]
});