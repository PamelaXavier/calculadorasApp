import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = ''; // variavel de calculo vazia
  public resultado: string; // variavel que abriga o resultado da operacao 

  private ponto = false; // variavel bollean do ponto

  private operacoes = ['+','-','*','/'] // variavel que possibilita a escolha da operacao matematica desejada

  constructor(public alertController: AlertController) {}

  public adicionarNumero(valor: string) { // Metodo que possibilita a escolha do numero pelo usuario
    if(this.resultado){
      this.apagarTudo();
    }
    this.calculo = this.calculo + valor;
  }

  public adicionarPonto() { // Metodo que possibilita adicionar ponto ao numeral 

    if(this.ponto){
      return; // o return vazio significa que nao irá executar mais nenhuma operacao, ou seja, nao vai mais adicionar pontos

    }

    this.calculo += ".";
    this.ponto = true;
  }
  
  public adicionarOperacao(operador: string) { // Metodo que adiciona a operacao escolhida

    if(this.resultado){
      this.calculo = this.resultado.toString(); // toString transforma o que foi pego em tipo String, exemplo numero vira texto
      this.resultado = null;
    }
    const ultimo = this.calculo.slice(-1);
    if(this.operacoes.indexOf(ultimo) > -1){ 
      return;
    }

    this.calculo += operador;
    this.ponto = false;
  }

  public apagarTudo() { // Metodo que limpa a calculadora 
    this.calculo = '';
    this.resultado = null;
    this.ponto = false;
  }

  public apagarUltimo() { // Metodo que apaga um numero ou sinal de cada vez na calculadora
    const ultimo = this.calculo.slice(-1);

    if(ultimo == '.'){
    this.ponto = false;
    }

    this.calculo = this.calculo.slice(0,-1);
  }

  public calcularResultado() {

    try{
      this.resultado = evaluate(this.calculo);
    } catch (e) {
      this.resultado = '';
      this.presentAlert('ERRO!','Cálculo inválido, verifique!'); // mensagem que aparecerá no alert
    }
    
  }

  async presentAlert(titulo: string, mensagem: string) { // Metodo que cria o alert
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
}
