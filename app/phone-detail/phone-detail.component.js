'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', 'Pay',
      function PhoneDetailController($routeParams, Phone, Pay) {
        var self = this;
        self.paymentResponse;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        // payment
        self.pay = function(phoneId) {
          Pay.doPayment()
          .then(function(data) {
            console.log("response", data.status);
            self.paymentResponse = data.status;
            self.phone.stock--;
          })
          .catch(function(error) {
            console.error("error", error);
            self.paymentResponse = "ERROR TECHNIQUE !";
          });
        }
      }
    ]
  });
