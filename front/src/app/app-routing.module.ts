import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaAreaFuncionarioComponent } from './tela-area-funcionario/tela-area-funcionario.component';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroClienteComponent } from './tela-cadastro-cliente/tela-cadastro-cliente.component';
import { TelaCadastroFuncionarioComponent } from './tela-cadastro-funcionario/tela-cadastro-funcionario.component';

const routes: Routes = [
  {
    component: TelaFilmesComponent,
    path: ''
  },
  {
    component: TelaCadastroClienteComponent,
    path: 'cadastro'
  },
  {
    component: TelaCadastroFuncionarioComponent,
    path: 'cadastroFuncionario'
  },
  {
    component: TelaLoginComponent,
    path: 'login'
  },
  {
    component: TelaAreaFuncionarioComponent,
    path: 'areaFuncionario'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
