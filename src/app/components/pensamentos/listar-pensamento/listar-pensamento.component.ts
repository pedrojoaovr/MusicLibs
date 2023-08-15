import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[]=[];
  paginaAtual:number = 1
  MaisPensamentos: boolean= true
  filtro: string=''
  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaissPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro).subscribe((listaPensamentos =>{
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.MaisPensamentos =false
      }
    }))
  }

  pesquisarPensamentos(){
    this.MaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaPensamentos=>{
      this.listaPensamentos=listaPensamentos
    })
  }

}
