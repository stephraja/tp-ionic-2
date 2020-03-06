import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string
  constructor() {}

  public updateTitle(newTitle: string) {
    this.title = newTitle
  }

}
