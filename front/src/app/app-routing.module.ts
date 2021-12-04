import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaAreaFuncionarioComponent } from './tela-area-funcionario/tela-area-funcionario.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {
    component: TelaFilmesComponent,
    path: ''
  },
  {
    component: TelaCadastroComponent,
    path: 'cadastro'
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
