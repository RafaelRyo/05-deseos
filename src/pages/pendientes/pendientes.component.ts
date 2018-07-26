import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';
import { AlertController} from 'ionic-angular';

@Component({
  selector:'page-pendientes',
  templateUrl:'pendientes.component.html'
})
export class PendientesPage {
  //Aqui inyectamos el servicio recordar importarlo haya arriba
  constructor( public deseosService: DeseosService,
                private navCtrl: NavController,
                private alertCtrl: AlertController ){

  }
  //metodo
  
  agregarLista(){
    //this.navCtrl.push( AgregarPage );
    const alerta =  this.alertCtrl.create({
      title:'Nueva lista',
      message: 'Nombre de la nueva lista que deseo',
      inputs: [{
        name:'titulo',
        placeholder:'Nombre de la lista'
      }],
      buttons:[{
          text:'Cancelar'
      },{
          text:'agregar',
          handler: data => {
            //AQui ponemos la condicion si la data esta vacia no pasara nada
            if(data.titulo.length === 0 ){
              return;
            }
            this.navCtrl.push( AgregarPage, {
              titulo: data.titulo
            });
        }
      }]

    });
    alerta.present();
  }

}
