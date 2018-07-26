import { Component } from '@angular/core';

import { TerminadosPage} from '../terminados/terminados.component';

import { PendientesPage } from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;


  constructor() {

  }
}
