import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from '../../../service/mensagem.service';
import { Mensagem } from '../../../model/mensagem';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public mensagens:Mensagem[] = [];

	constructor(private router: Router, private mensagemService: MensagemService) {
	}

  ngOnInit() {
    this.buscarMensagens();
  }

  private buscarMensagens(){
    this.mensagemService.buscarTodasMensagens().subscribe(
      retorno => {

        let lista = this.validarRetorno(retorno);
        if(lista != null){
          this.mensagens = lista;
          console.log("retorno das mensagens",this.mensagens);
          
        }

      }, 
      erro => {
        console.log(erro);
    });
  }

  private validarRetorno(retorno){
    if(retorno.codigo == 200){
      return retorno.lista;
    }
    else {
      console.log("erro no retorno",retorno.mensagens[0].valor);
      return null;
    }
  }

  public retornarUserBy(mensagem:Mensagem):String{
    if(mensagem.userBy){
      return mensagem.userBy;
    }
    return "none";
  }

}
