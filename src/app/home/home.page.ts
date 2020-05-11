import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dayShortNames: any;
  constructor() {
    this.dayShortNames = ['Mo1', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  }

}
