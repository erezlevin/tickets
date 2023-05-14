sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'tickets.MyFioriUI',
            componentId: 'TicketsList',
            entitySet: 'Tickets'
        },
        CustomPageDefinitions
    );
});