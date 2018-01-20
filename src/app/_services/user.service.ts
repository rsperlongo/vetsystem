import { User } from './../_models/user';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http/src/base_request_options';

Injectable()
export class UserService {
    constructor(
        private http:Http,
        private authenticationService: AuthenticationService,
    ) {}

    getUsers(): Observable<User[]>{
        let headers = new Headers({ 'Authorization':'Bearer' + this.authenticationService.token  });
        let options = new RequestOptions({headers: headers});
        
        return this.http.get('api/users', options)
            .map((response: Response) => response.json())
    }
}