import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  persona = new FormGroup(
    {
      elRut: new FormControl(''),
      elNombreCompleto: new FormControl(''),
      laEdad: new FormControl('')
    }
  )
}
