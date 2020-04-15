import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

type Position = {
  latitude: number
  longitude: number
}

export class HomePage {

  title: string;
  position: Position
  constructor(private geolocation: Geolocation) {}

  public updateTitle(newTitle: string) {
    this.title = newTitle
  }

  async getPosition() {
    await this.geolocation.getCurrentPosition().then((result: Geoposition) => {
      this.position.latitude = result.coords.latitude
      this.position.longitude = result.coords.longitude
    })
  }

}
