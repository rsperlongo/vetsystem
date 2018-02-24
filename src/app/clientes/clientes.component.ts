import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { Clientes } from './clientes.models';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  clientes: Observable<any[]>;

  constructor(db: AngularFirestore ) {
    this.clientes = db.collection('clientes').valueChanges();
  }

  ngOnInit() {
  }

  

}
