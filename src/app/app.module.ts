import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicarPasantiaComponent } from './publicar-pasantia/publicar-pasantia.component';
import { FormularioPasantiaComponent } from './formulario-pasantia/formulario-pasantia.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarEmpresaComponent } from './registro/registrar-empresa/registrar-empresa.component';
import { RegistrarEstudianteComponent } from './registro/registrar-estudiante/registrar-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PublicarPasantiaComponent,
    FormularioPasantiaComponent,
    RegistroComponent,
    RegistrarEmpresaComponent,
    RegistrarEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
