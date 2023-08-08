import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensanmentos',
  templateUrl: './criar-pensanmentos.component.html',
  styleUrls: ['./criar-pensanmentos.component.css']
})
export class CriarPensanmentosComponent implements OnInit {

  pensamento : Pensamento={
    id: 1,
    conteudo: 'angular',
    autoria:'Dev',
    modelo:'Modelo 1'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPenasmento(){
    alert("Novo Pensamento Criado")
  }

  cancelar(){
    alert("OI TESTE")
  }

}
