'use strict';

angular.module('app.controllers')

    .controller('prescripcionCtrl', ['$rootScope', '$scope', '$ionicHistory',
        function ($rootScope, $scope, $ionicHistory) {

            $scope.init = function () {
                console.log('entro pes')
            }

            $scope.backView = function () {
                $ionicHistory.goBack();

            }

        }


    ])
