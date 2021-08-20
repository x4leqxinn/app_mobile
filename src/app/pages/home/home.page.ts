import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
}
