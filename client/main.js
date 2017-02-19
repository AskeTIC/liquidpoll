import { Meteor } from 'meteor/meteor';
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

    Accounts.onLogin(function(){
        console.log("onLogin() en cliente!!!");
        var user = Meteor.user();
        console.log(user);
        if(user.profile.loggings === 0){
            console.log("Es el primer logging, así que le redirijo a su dashboard");
            //TODO: redirigir al dashboard de usuario.
        }
        //TODO: si refresco la página suma un login por que la session se mantiene en caché, es como si estaría contando conexiones.
        //Quizás al refrescar haya que desconectar o solo contar cuando se obtiene un token de session.
        user.profile.loggings += 1;
        console.log(Meteor.userId());
        Meteor.users.update({ "_id": Meteor.userId()}, { $set : {"profile": user.profile}});

    });

}

function runWebapp($rootScope){
    console.log("run() de webapp ......");
    $rootScope.userId = Meteor.userId();

}
