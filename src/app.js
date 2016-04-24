import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Biacz</h1>
    <h2>{{ what }}</h2>
  `
})
export default class App {
  constructor() {
    this.what = "Test!";
  }
};