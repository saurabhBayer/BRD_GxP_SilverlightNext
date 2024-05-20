import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { NativeBiometric, BiometryType } from "@capgo/capacitor-native-biometric";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  appTitle: string = '';
  isMobileDevice: boolean = false;
  biometricMessage = '';
  constructor() {

    if (Capacitor.getPlatform() === 'ios') {
      this.appTitle = "I am a iOS app.";
      this.isMobileDevice = true;
    } else if (Capacitor.getPlatform() === 'android') {
      this.appTitle = "I am a Android app.";
      this.isMobileDevice = true;
    } else {
      this.appTitle = "I am a web browser.";
      this.isMobileDevice = false;
    }
  }

  async onBiometricCheck() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable) {
      // Biometric authentication is not available
      this.biometricMessage = result.errorCode?.toString() ?? '';
    }
    else {
      // Biometric authentication is available
      this.biometricMessage = "Biometric authentication is available";
      this.biometricMessage += "BiometryType: " + BiometryType[result.biometryType];


      // Call the authenticate method to verify biometric
      // const authResult = await NativeBiometric.verifyIdentity;
      // if (authResult.success) {
      //   // Biometric authentication is successful
      //   console.log("Biometric authentication is successful");
      // } else {
      //   // Biometric authentication is failed
      //   console.log("Biometric authentication is failed");
      // }
    }
  }
}
