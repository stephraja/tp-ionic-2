import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'

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
  positions: Position[]
  constructor(private geolocation: Geolocation) {}

  public updateTitle(newTitle: string) {
    this.title = newTitle
  }

  getPosition() {
    this.geolocation.watchPosition().subscribe(obs => {
      this.positions.push({ latitude: obs.coords.latitude, longitude: obs.coords.longitude })
    })
  }
}
