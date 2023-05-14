using { Northwind_full_url } from './external/Northwind_full_url.cds';

using { tickets as my } from '../db/schema';

using tickets from '../db/schema';

@path : 'service/tickets'
service ticketsService
{
    entity Tickets as
        projection on my.Tickets;

    entity Customers as
        projection on Northwind_full_url.Customers;
}

annotate ticketsService with @requires :
[
    'authenticated-user'
];
