'use strict';
 angular.module('app.services', [])
.factory('priceAProcedureService', ['$resource', "apiUrl",'utilFactory',
    function ($resource, apiUrl,utilFactory) {

        var rootURL = apiUrl.baseUrl;

        return $resource('priceAProcedureService', {}, {
            priceAProcedure: {
                method: 'POST',
                url: rootURL + '/GetProcedures',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: utilFactory.encodePostBody
            }

        });
    }
]);