import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario,Rol } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id_usuario !: string;
  updateUserForm!: FormGroup;
  id_usuarioForm!: FormControl;
  nombre!: string;
  activo!: string;
  rol!: Rol[];
  usuarios: any;
  error: boolean = false;
  constructor(private formBuilder:FormBuilder , private usuarioService:UsuarioService) { }
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  help!:  boolean;
  
  ngOnInit(): void {
    this.usuarioService.getAllUser().subscribe(data =>{
      this.usuarios = data;
      
     });
  
    this.updateUserForm = new FormGroup({
      nombre: new FormControl(),
      activo: new FormControl(),
      rol: new FormControl(),
      id_usuario: new FormControl()
   });

  }
  actualizarUsuario() {
    this.usuarioService.updateUser(this.updateUserForm.value).subscribe(data =>{
      console.log('usuario actualizado')
    }, err=> {
      console.log(err);
    })
}

eliminarUsuario() {
  this.usuarioService.deleteUser(this.updateUserForm.get('id_usuario')?.value).subscribe(data =>{
    console.log('usuario eliminado')
  }, err=> {
    console.log(err);
  })
}
}