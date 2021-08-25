import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private router: Router, private navControl: NavController) { 

  }

  ngOnInit() {
  }

  volverInicio(){
    this.router.navigate(['/home'])
  }
}
