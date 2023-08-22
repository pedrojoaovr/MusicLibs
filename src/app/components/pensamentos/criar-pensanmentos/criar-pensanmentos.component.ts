import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensanmentos',
  templateUrl: './criar-pensanmentos.component.html',
  styleUrls: ['./criar-pensanmentos.component.css']
})
export class CriarPensanmentosComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.formulario=this.formBuilder.group({
      conteudo:['',Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria:['', Validators.compose([
        Validators.required,
        Validators.minLength(5)])],
      modelo:['modelo1'],
      favorito:[false]
    })
  }

  criarPenasmento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
    this.service.criar(this.formulario.value).subscribe(()=>{
    this.router.navigate(['/listarPensamento'])
  })
}
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])  }


  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }

  }
}
