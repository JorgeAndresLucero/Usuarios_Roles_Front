import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from '../interfaces/usuario.interface';
import { CrearUsuario } from '../interfaces/crearusuario.interface';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private apiUrl: string = 'http://localhost:9003/api/v1/usuario';

    get params(): HttpParams {
        return new HttpParams()
            .set( 'fields', 'nombre;activo' );
    }

    constructor(
        private http: HttpClient
    ) { }

    searchMatchUser( term: string ): Observable<Usuario[]> {
        const url = `${ this.apiUrl }/match/${ term }`;

        return this.http.get<Usuario[]>( url, { params: this.params } );
    }

    getAllUser( ):Observable<Usuario[]> {
        const url = `${ this.apiUrl }/all/`;
        return this.http.get<Usuario[]>( url, { params: this.params } );
    }



    createUser( user: CrearUsuario ): Observable<CrearUsuario> {
        const url = `${ this.apiUrl }/crear/`;
        return this.http.post<CrearUsuario>( url, user );
    }

    updateUser( user: Usuario ): Observable<Usuario> {
        const url = `${ this.apiUrl }/actualizar/`;
        return this.http.post<Usuario>( url, user );
    }

    deleteUser( term: string ): Observable<string> {
        const url = `${ this.apiUrl }/eliminar/${ term }`;

        return this.http.delete<string>( url, { params: this.params } );
    }

}