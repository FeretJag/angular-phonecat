'use strict';

angular.
  module('core.pay').
  factory('Pay', function($http) {
  
      var doPayment = function(phoneId) {
        console.log('doPayment');
        return $http.get('payments/ok.json');
      };

      return {
        doPayment: doPayment
      };

    }
  );
