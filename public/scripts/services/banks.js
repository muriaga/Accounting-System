'use strict';

angular.module('accounting')
    .factory('BankFactory', function($http, $q) {

        return {

            createBanks: function(data, callback) {
                var cb = callback || angular.noop;
                var deferred = $q.defer();

                $http.post('/api/v1/bank', data).
                success(function(data) {
                    deferred.resolve(data);
                    return cb();
                }).
                error(function(err) {
                    deferred.reject(err);
                    return cb(err);
                }.bind(this));

                return deferred.promise;
            },
        };
    });
