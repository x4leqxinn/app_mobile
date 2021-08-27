import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 
//Importamos el componente de manejo de forms
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Permite crear objetos que se pueden 
  // utilizar en nuestra página TypeScript

  // Atributos o variables de la clase

  valor:String = "Adiós Mundo";

  rut:String;
  nombreCompleto:String;
  edad:number;

  // Crear controles de formularios asociados a la etiqueta ion-input
  // <ion-input [FormControl] = "formRut"></ion-input>
  persona = new FormGroup({
    formRut : new FormControl(''),
    formNombreCompleto : new FormControl(''),
    formEdad : new FormControl('')

  });


  // Indicamos un Router
  // Indicamos un NavControl
  constructor(private router: Router, private navControl: NavController) {

  }

  //Creamos un método para navegar a la página 
  irPagina2(){
    this.router.navigate(['/pagina2'])
  }

  // Ir y volver
  irPagina3(){
    this.navControl.navigateForward(['/pagina3']);
  }

////////////////////////////////////////////////

  // Crear Arreglo
  lista_personas = new Array();
  perso:any;

  //Creación de métodos
  guardar(){
    // let var_rut = this.persona.value;
    // alert('valor persona ' + var_rut);
    this.perso = {
      rut:this.persona.controls.formRut.value,
      nombre:this.persona.controls.formNombreCompleto.value,
      edad:this.persona.controls.formEdad.value
    };

    console.log(this.perso);
    alert('El nombre es ' + this.perso.rut);
    this.lista_personas.push(this.perso);
  }

  eliminar(){
    
  }


}
