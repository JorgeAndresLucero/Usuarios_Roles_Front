import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioService } from '../../services/usuario.service';
import { RolService } from '../../services/rol.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrearUsuario } from '../../interfaces/crearusuario.interface';
import { Inject } from '@angular/core';  


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  usuarios: any;
  roles: any;
  id_usuario!: string;
  nombre!: string;
  activo!: string;
  rol!: string;
  error: boolean = false;
  displayedColumns: string[] = ['id', 'nombre', 'activo', 'rol', 'acciones'];
  constructor(private _usuarioService:UsuarioService, private rolesService: RolService){}

  ngOnInit(): void {
     this._usuarioService.getAllUser().subscribe(data =>{
     this.usuarios = data;
     this.cargarUsuarios();
     
    });

    this.rolesService.getAllRoles().subscribe(data =>{
      this.roles = data;
      this.cargarRoles();
    })
  }
  
  cargarUsuarios() {
    this.usuarios = new MatTableDataSource( this.usuarios); 
  }

  eliminarUsuario(id: string){
    this._usuarioService.deleteUser(id);
  }

  cargarRoles(){
    this.rolesService.getAllRoles();
  }



  applyFilter(event: string): void {
     this.usuarios.filter = event;
     if(this.usuarios.paginator){
       this.usuarios.paginator.firstPage();
     }
  }
}








