/**
 * Created with JetBrains WebStorm.
 * User: Toni
 * Date: 17.03.13
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('JT.model.Session', {
    extend: 'Ext.data.Model',

    uses: [
        'JT.model.Issue'
    ],

    fields: [
        {
            name: 'startdate',
            type: 'date'
        },
        {
            name: 'timeSpend'
        },
        {
            name: 'active',
            type: 'bool'
        }
    ],

    hasOne: [
        {
            model: 'JT.model.Issue',
            setterName: 'setIssue',
            getterName: 'getIssue'
        }
    ]
});