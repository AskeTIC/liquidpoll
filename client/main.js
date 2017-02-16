import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
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
    //var userLoggings = Meteor.subscribe("userLoggings").fetch();
    //console.log(userLoggings);
    Accounts.onLogin(function(){
        console.log("onLogin() en cliente!!!");
        var user = Meteor.user();
        console.log(user);
        if(user.profile.loggings === 0){
            console.log("Es el primer logging, así que le redirijo a su dashboard");
            //TODO: redirigir al dashboard de usuario.

        }
        //TODO: sumar +1 a profile.logging
        user.profile.loggings += 1;
        console.log(Meteor.userId());
        Meteor.users.update({ "_id": Meteor.userId()}, { $set : {"profile": user.profile}});
    });

    /*
    Tracker.autorun(function(){
        console.log("Tracker.autorun() dependiente de Accounts.loggingIn()");
        //Si vengo de no haber usuario logueado, por que si cambia el valor de Accounts.loggingIn()
        //de false a true o de true a false se ejecutará el autorun() 2 veces muy rápidas.
        if(!Meteor.userId){
            //Quizás usar onLogin() que es cuando se ha producido el login.
            Accounts.loggingIn();
        }
    });
    */
}

function runWebapp($rootScope){
    console.log("run() de webapp ......");
    $rootScope.userId = Meteor.userId();
}
