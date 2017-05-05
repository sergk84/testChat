import angular from 'angular';

import 'angular-ui-router';
import 'ngStorage';
import 'angular-audio';
import routesConfig from './routes';

import {PagesModule} from './app/pages/pages.module';
import {CommonModule} from './app/common/common.module';
import {ComponentsModule} from './app/components/components.module';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

angular
  .module('app', [PagesModule,CommonModule,ComponentsModule, 'ui.router','ngStorage','ngAudio'])
  .config(routesConfig);