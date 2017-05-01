import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CidadePage } from '../cidade/cidade';
import { FretePage } from '../frete/frete';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CidadePage;
  tab3Root: any = FretePage;

  constructor() {

  }
}
