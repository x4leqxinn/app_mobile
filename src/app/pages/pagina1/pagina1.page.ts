import { Component, OnInit } from '@angular/core';


//IMPORTAMOS ALERT CONTROLLER PARA PODER HACER ALERT PERSONALIZADOS
import { AlertController } from '@ionic/angular';

// Importamos la libreria de rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  //Instanciamos en el cosntructor el alertController para usarlo
  constructor(private router:Router, private alertController : AlertController) { 

  }

  ngOnInit() {
    // Se ejecuta al inicar la página
    this.listar();
  }

  //Mensaje de alerta para eliminar

  async alertaConfirmarEliminar(rut:String) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar',
      message: '¿Desea eliminar registro <strong>' + rut +'</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            this.eliminar(rut);
          }
        }
      ]
    });

    await alert.present();
  }

  lista_personas = [
    {
      rut: "213",
      nombre: "Jorge",
      edad:33
    },
    {
      rut: "21",
      nombre: "aldo",
      edad:33
    },
    {
      rut: "343",
      nombre: "a",
      edad:33
    }
  ]

  //Clase tipo persona
  perso:any;


  //metodos
  eliminar(rut:String){
    alert('Seleccionó eliminar');
    var datos = localStorage.getItem('misdatos');

    // LISTAR
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(";");
    var per;
    var lista_temporal = new Array();
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per = {
        rut: la_persona.rut,
        nombre: la_persona.nombre,
        edad: la_persona.edad
      };
      if(la_persona.rut != rut){
        lista_temporal.push(per);
      }
      this.lista_personas = lista_temporal;
      localStorage.setItem('misdatos',JSON.stringify(lista_temporal))
    }
    
    this.lista_personas= lista_temporal;
  }

  actualizar(rut:String){
    alert('Seleccionó actualizar');
    this.router.navigate(['/pagina2',rut]);
  }

  listar(){
    ////
    var datos = localStorage.getItem('misdatos');
    // Parsear JSON
    //this.lista_personas = JSON.parse(datos);

    // LISTAR
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(";");
    var per;
    var lista_temporal = new Array();
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per = {
        rut: la_persona.rut,
        nombre: la_persona.nombre
      };
      lista_temporal.push(per);
    }
    
    this.lista_personas= lista_temporal;

    
  }
}
