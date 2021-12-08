import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaAreaFuncionarioComponent } from './tela-area-funcionario/tela-area-funcionario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    TelaFilmesComponent,
    TelaLoginComponent,
    TelaAreaFuncionarioComponent,
    NavbarComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
