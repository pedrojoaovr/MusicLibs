import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensanmentosComponent } from './components/pensamentos/criar-pensanmentos/criar-pensanmentos.component';
import { ListarPensamentoComponent } from './components/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
  path:'criarPensamento',
  component: CriarPensanmentosComponent
},
{
  path:'listarPensamento',
  component: ListarPensamentoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
