import 'zone.js';
import 'reflect-metadata';
import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import App from './app';


bootstrap(App).catch(err => console.error(err));