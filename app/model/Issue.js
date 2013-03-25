/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('JT.model.Issue', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'key',  type: 'string'},
        {name: 'self'},
        {name: 'title',  type: 'string', mapping: 'fields.summary'}
    ]
});