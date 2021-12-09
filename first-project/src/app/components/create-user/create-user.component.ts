import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Rol } from '../../interfaces/usuario.interface';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  id !: number
  addUserForm!: FormGroup;
  nombre!: string;
  activo!: string;
  rol!: Rol[];
  usuarios: any;
  error: boolean = false;
  constructor(private formBuilder:FormBuilder , private usuarioService:UsuarioService) { }
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  ngOnInit(): void {
    this.usuarioService.getAllUser().subscribe(data =>{
      this.usuarios = data;
     });

     this.addUserForm = new FormGroup({
      nombre: new FormControl(),
      activo: new FormControl(),
      rol: new FormControl() 
   });
  }
  guardarUsuario() {
    this.usuarioService.createUser(this.addUserForm.value).subscribe(data =>{
      console.log('usuario creado')
    }, err=> {
      console.log(err);
    })
 
}

}
