import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AppDataProvider } from '../providers/app-data/app-data';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, appData: AppDataProvider) {
		//logic to check isMobile or not. We set 500px is the threadhold resolution between mobile and not mobile
		var widthOfDevice = window.innerWidth;
		appData.isMobile = widthOfDevice < 500 ? true : false;
		console.log('appData.isMobile ', appData.isMobile, widthOfDevice);
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
    });
	}
}

