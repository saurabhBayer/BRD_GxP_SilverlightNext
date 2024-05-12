import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  appTitle: string = 'blank';
  constructor() {

    if (Capacitor.getPlatform() === 'ios') {
      this.appTitle = "I am a iOS app.";
    } else if (Capacitor.getPlatform() === 'android') {
      this.appTitle = "I am a Android app.";
    } else {
      this.appTitle = "I am a web browser.";
    }
  }

}
