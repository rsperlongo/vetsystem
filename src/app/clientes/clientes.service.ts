import { AngularFirestore } from 'angularfire2/firestore';
import { Clientes } from './clientes.models';
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class ClientesService {
    clientesRef: AngularFireList<any>;
    clientes: Observable<any[]>;
    
    constructor(private db: AngularFireDatabase){
        this.clientesRef = db.list('clientes');
        this.clientes = this.clientesRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        }); 

    }

    addClientes(newName: string){
    this.clientesRef.push({ text: newName });
    }
        
}