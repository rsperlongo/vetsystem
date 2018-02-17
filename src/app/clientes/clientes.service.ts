import { Clientes } from './clientes.models';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ClientesService {

    private nome: string[];


    constructor(public af: AngularFireDatabase) {
        let clientes = this.af.list('/clientes');
    }

    getClientes(){
        
    }
}