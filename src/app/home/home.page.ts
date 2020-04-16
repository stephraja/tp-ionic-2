import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { filter } from 'rxjs/operators'

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
  constructor(private geolocation: Geolocation, private notifications: LocalNotifications) {}

  public updateTitle(newTitle: string) {
    this.title = newTitle
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    let watch = this.geolocation.watchPosition().pipe(filter((p) => p.coords !== undefined))
    watch.subscribe((data) => {
      console.log(data)
      this.positions.push({ latitude: data.coords.latitude, longitude: data.coords.longitude })
    })
  }

  public notification1() {
    console.log('notification 1')
    this.notifications.schedule({
      id: 1,
      text: 'Notification 1'
    })
  }

  public notification2() {
    console.log('notification 2')
    this.notifications.schedule({
      id: 2,
      text: 'Notification 2'
    })
  }

}
