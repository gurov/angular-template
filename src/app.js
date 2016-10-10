import 'expose-loader?jQuery!jquery';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

import angular from 'angular';
import 'angular-ui-router';

import {account} from './account/account';

angular.module('app', [
    'ui.router',
    account.name
]);
