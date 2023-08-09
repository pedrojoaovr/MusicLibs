import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensanmentos',
  templateUrl: './criar-pensanmentos.component.html',
  styleUrls: ['./criar-pensanmentos.component.css']
})
export class CriarPensanmentosComponent implements OnInit {

  pensamento : Pensamento={
    conteudo: '',
    autoria:'',
    modelo:''
  }
  constructor(
    private service: PensamentoService,
    private router: Router) {}

  ngOnInit(): void {
  }

  criarPenasmento(){
    this.service.criar(this.pensamento).subscribe(()=>{
    this.router.navigate(['/listarPensamento'])
  })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])  }

}
