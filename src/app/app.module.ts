import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CidadePage } from '../pages/cidade/cidade';
import { CadastroCidadePage } from '../pages/cadastro-cidade/cadastro-cidade';
import { ListaCidadePage } from '../pages/lista-cidade/lista-cidade';
import { FretePage } from '../pages/frete/frete';
import { CalculoFretePage } from '../pages/calculo-frete/calculo-frete';
import { ListaFretePage } from '../pages/lista-frete/lista-frete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CidadePage,
    CadastroCidadePage,
    ListaCidadePage,
    FretePage,
    CalculoFretePage,
    ListaFretePage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CidadePage,
    CadastroCidadePage,
    ListaCidadePage,
    FretePage,
    CalculoFretePage,
    ListaFretePage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
