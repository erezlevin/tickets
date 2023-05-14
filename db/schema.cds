using { Northwind_full_url } from '../srv/external/Northwind_full_url.cds'; 
namespace tickets;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Contacts
{
    key ID : UUID
        @Core.Computed;
    firstName : String(100);
    lastName : String(100);
    Email : String(100);
}

entity ContactAdress
{
    key ID : UUID
        @Core.Computed;
    Street : String(100);
    City : String(100);
    Country : String(100);
    contact : Association to one Contacts;
}

entity Tickets
{
    key ID : UUID
        @Core.Computed;
    message : String(100);
    status : String(100);
    contact : Association to one Contacts;
}
