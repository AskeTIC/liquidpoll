import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as landingOffcanvas } from '../landingOffcanvas/landingOffcanvas';
import { name as landingMenu } from '../landingMenu/landingMenu';
import { name as landingPage } from '../landingPage/landingPage';
import { name as landingFooter } from '../landingFooter/landingFooter';

import template from './landing.html';

const name = 'landing';

class Landing {

}

// create a module with a componente
export default angular.module(name, [
  angularMeteor,
  landingOffcanvas,
  landingMenu,
  landingPage,
  landingFooter ])
  .component(name, {
    templateUrl: template,
    controller: Landing,
    controllerAs: name
  })
