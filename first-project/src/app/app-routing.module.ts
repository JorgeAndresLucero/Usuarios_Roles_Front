import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'usuarios', pathMatch: 'full'
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
    //loadChildren: () => import( './usuarios' ).then( m => m.AuthModule )
  },
  {
    path: 'crearuser',
    component: CreateUserComponent
    //loadChildren: () => import( './crearusuario' ).then( m => m.AuthModule )
  },
  {
    path: 'editarusuario',
    component: UpdateUserComponent
    //loadChildren: () => import( './editarausuario' ).then( m => m.ReservationsModule )
  },
 
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
