sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tickets/MyFioriUI/test/integration/FirstJourney',
		'tickets/MyFioriUI/test/integration/pages/TicketsList',
		'tickets/MyFioriUI/test/integration/pages/TicketsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TicketsList, TicketsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tickets/MyFioriUI') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTicketsList: TicketsList,
					onTheTicketsObjectPage: TicketsObjectPage
                }
            },
            opaJourney.run
        );
    }
);