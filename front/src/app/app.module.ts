import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { TelaCadastroFuncionarioComponent } from './tela-cadastro-funcionario/tela-cadastro-funcionario.component';
import { TelaCadastroClienteComponent } from './tela-cadastro-cliente/tela-cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TelaIngressosComponent } from './tela-ingressos/tela-ingressos.component'

@NgModule({
  declarations: [
    AppComponent,
    TelaFilmesComponent,
    TelaLoginComponent,
    NavbarComponent,
    CadastroClienteComponent,
    TelaCadastroFuncionarioComponent,
    TelaCadastroClienteComponent,
    CadastroFuncionarioComponent,
    CadastroFilmeComponent,
    TelaIngressosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
