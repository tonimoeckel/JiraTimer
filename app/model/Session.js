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
            type: 'date',
            useNull: true
        },
        {
            name: 'timeSpend',
            defaultValue: 0
        },
        {
            name: 'active',
            type: 'bool',
            defaultValue: false
        },
        {
            name: 'issue_id'
        }
    ],

    proxy: {
        type: 'localstorage',
        id  : 'JireTimer-Sessions'
    },

    hasOne: [
        {
            instanceName: 'issue',
            associationKey: 'issue',
            foreignKey: 'issue_id',
            model: 'JT.model.Issue',
            getterName: 'getIssue',
            setterName: 'setIssue'
        }
    ]

});