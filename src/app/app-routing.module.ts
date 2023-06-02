import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicarPasantiaComponent } from './publicar-pasantia/publicar-pasantia.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'publicar-pasantia', component: PublicarPasantiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }; 
