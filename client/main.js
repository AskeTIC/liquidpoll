import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import angularElastic from 'angular-elastic';

import { name as webMain } from '../imports/ui/components/webMain/webMain';
import { name as webSidebar } from '../imports/ui/components/webSidebar/webSidebar';
import { name as webHeader } from '../imports/ui/components/webHeader/webHeader';
import { name as webFooter } from '../imports/ui/components/webFooter/webFooter';

var app = angular.module('webapp', [
  angularMeteor,
  webMain,
  webSidebar,
  webHeader,
  webFooter
]);

app.$inject = ["$rootScope"];

app.config(configWebapp);
app.run(runWebapp);

function configWebapp(){
    console.log('config() de webapp.......');
}

function runWebapp($rootScope){
    console.log("run() de webapp ......");
    $rootScope.userId = Meteor.userId();
}
