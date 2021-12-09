import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rol } from '../interfaces/rol.interface';


@Injectable({
    providedIn: 'root'
})
export class RolService {
    private apiUrl: string = 'http://localhost:9003/api/v1/rol';

    get params(): HttpParams {
        return new HttpParams()
            .set( 'fields', 'nombre');
    }

    constructor(
        private http: HttpClient
    ) { }


    getAllRoles(): Observable<Rol[]> {
        const url = `${ this.apiUrl }/all`;
        return this.http.get<Rol[]>( url);
    }


}