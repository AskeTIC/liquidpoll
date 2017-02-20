import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import uiRouter from 'angular-ui-router';
import { name as WebAppServices } from './js/services/webAppServices';
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
    webFooter,
    uiRouter,
    WebAppServices
]);

app.$inject = ['$rootScope', 'WebAppConf'];

app.config(configWebapp);
app.run(runWebapp);

function configWebapp($stateProvider, $locationProvider, $urlRouterProvider) {
    console.log('config() de webapp.......');
    //Si es una vista no activa no funcionará un $state.go() si el config es el que define el 'state'
    //por lo que hay que definirlos en el config del módulo principal
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: '<view-user-dashboard></view-user-dashboard>',
            params: {
                user: { value: {} }
            }
        })
        .state('agora', {
            url: '/agoras/:agoraSlug',
            template: '<view-agora></view-agora>'
        })
        .state('agoras', {
            url: '/agoras',
            template: '<view-agora-list></view-agora-list>'
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function runWebapp($rootScope, WebAppConf){
    console.log("run() de webapp ......");
    $rootScope.userId = Meteor.userId();
    WebAppConf.onLogin();

}
