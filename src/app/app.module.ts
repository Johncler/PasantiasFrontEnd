import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { PublicarPasantiaComponent } from './publicar-pasantia/publicar-pasantia.component';
import { FormularioPasantiaComponent } from './formulario-pasantia/formulario-pasantia.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistrarEmpresaComponent,
    PublicarPasantiaComponent,
    FormularioPasantiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
