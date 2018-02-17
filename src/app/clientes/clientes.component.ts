import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

import { Clientes } from './clientes.models';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

}
