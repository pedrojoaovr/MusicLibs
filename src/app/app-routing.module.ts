import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensanmentosComponent } from './components/pensamentos/criar-pensanmentos/criar-pensanmentos.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

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
},
{
  path: 'pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
},
{
  path: 'pensamentos/editarPensamento/:id',
  component: EditarPensamentoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
