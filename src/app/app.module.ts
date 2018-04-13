import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from '../components/components.module';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppDataProvider } from '../providers/app-data/app-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AppDataProvider
  ]
})
export class AppModule {}
