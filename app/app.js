
//@require @packageOverrides

Ext.application({

    name: 'JT',


    controllers: [
        'Main',
        'Timer'
    ],


    autoCreateViewport: true,

    launch: function(){


        Ext.Ajax.on('beforerequest', function(conn, options, eOpts){

            options.url = 'http://172.22.5.3:8082/rest/api/2/' + options.url;

        });
    }
});
