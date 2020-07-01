import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public primeiroValor: number; // Variavel que abriga o numero digitado pelo usuario
  public segundoValor: number;

  public resultado: number; // Variavel que abriga o resultado da operacao escolhida

  constructor() { }

  public somar() { // Metodo para realizar a operacao de soma
    this.resultado = this.primeiroValor + this.segundoValor;
  }
  
  public subtrair() { // Metodo para realizar a operacao de subtracao
    this.resultado = this.primeiroValor - this.segundoValor;
  }

  public dividir() { // Metodo para realizar a operacao de divisao
    this.resultado = this.primeiroValor / this.segundoValor;
  }
  
  public multiplicar() { // Metodo para realizar a operacao de multiplicacao 
    this.resultado = this.primeiroValor * this.segundoValor;
  }

  public limpar() { // Metodo que limpa a calculadora
    this.primeiroValor = null;
    this.segundoValor = null;
    this.resultado = null;
  }
}
