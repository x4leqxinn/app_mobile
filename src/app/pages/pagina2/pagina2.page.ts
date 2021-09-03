import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private activatedRoute :  ActivatedRoute) { }

  ngOnInit() {
    // Recibimos el parametro
    var valor = this.activatedRoute.snapshot.paramMap.get('valor');
    this.buscar(valor);
    alert('El valor es ' + valor)
  }

  persona = new FormGroup(
    {
      formRut: new FormControl(''),
      formNombreCompleto: new FormControl(''),
      formEdad: new FormControl('')
    }
  )
  
  perso:any = {
    rut:'293892',
  };

  buscar(rut:String){
    var datos = localStorage.getItem('misdatos');

    // LISTAR
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      if(la_persona.rut == rut){
        this.perso = {
          rut: la_persona.rut,
        };
        this.persona.controls.formNombreCompleto.setValue(la_persona.nombre)
        this.persona.controls.formEdad.setValue(la_persona.edad)
      }
    }
  }
}
