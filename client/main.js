import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import angularElastic from 'angular-elastic';

import { name as webMain } from '../imports/ui/components/webMain/webMain';
import { name as webSidebar } from '../imports/ui/components/webSidebar/webSidebar';
import { name as webHeader } from '../imports/ui/components/webHeader/webHeader';
import { name as webFooter } from '../imports/ui/components/webFooter/webFooter';

angular.module('webapp', [
  angularMeteor,
  webMain,
  webSidebar,
  webHeader,
  webFooter
]);

Meteor.subscribe('agoras', {
    onStart: function () {
      console.log("Subscrito a todas las agoras");
    },
    onReady: function () {
      console.log("Preparada la subscripcion y los items han llegado");
      //subscriptionHandle.stop();  // Stopping the subscription, will cause onStop to fire
    },
    onStop: function (error) {
      if (error) {
        console.log('An error happened - ', error);
      } else {
        console.log('The subscription stopped');
      }
    }
})
