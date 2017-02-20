import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base';
import uiRouter from 'angular-ui-router';

const name = 'WebAppServices';

export default angular.module(name, [])
    .service('WebAppConf', cbWebAppConf);


//Wrapper for Login logic in config webapp
function cbWebAppConf($state){
    console.log("WebAppServices Factory instanciada!!");
    var onLogin = function(){
        Accounts.onLogin(function(){
            console.log("onLogin() en cliente!!!");
            var user = Meteor.user();
            console.log(user);
            if(user.profile.loggings === 0){
                console.log("Es el primer logging, así que le redirijo a su dashboard");
                //TODO: redirigir al dashboard de usuario.
                $state.go('dashboard', {user: user});
            }
            //TODO: si refresco la página suma un login por que la session se mantiene en caché, es como si estaría contando conexiones.
            //Quizás al refrescar haya que desconectar o solo contar cuando se obtiene un token de session.
            user.profile.loggings += 1;
            //console.log(Meteor.userId());
            Meteor.users.update({ "_id": Meteor.userId()}, { $set : {"profile": user.profile}});

        });

    }


    //API Factory
    return {
        onLogin: onLogin
    }

}
