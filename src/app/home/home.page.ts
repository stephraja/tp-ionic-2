import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx'

type Position = {
  latitude: number
  longitude: number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  position: Position[]
  constructor(private geolocation: Geolocation) {}

  public updateTitle(newTitle: string) {
    this.title = newTitle
  }

  async getPosition() {
    await this.geolocation.getCurrentPosition().then((result: Geoposition) => {
      this.position.push({latitude: result.coords.latitude, longitude: result.coords.longitude})
    })
  }
}
