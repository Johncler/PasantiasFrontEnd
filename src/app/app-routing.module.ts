import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicarPasantiaComponent } from './publicar-pasantia/publicar-pasantia.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarEmpresaComponent } from './registro/registrar-empresa/registrar-empresa.component';
import { RegistrarEstudianteComponent } from './registro/registrar-estudiante/registrar-estudiante.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumEditComponent } from './curriculum-edit/curriculum-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'publicar-pasantia', component: PublicarPasantiaComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'registrar-empresa', component: RegistrarEmpresaComponent},
  { path: 'registrar-estudiante', component: RegistrarEstudianteComponent},
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'curriculum/:id', component: CurriculumEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }; 
