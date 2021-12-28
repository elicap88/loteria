import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-bet-slipt',
  templateUrl: './bet-slipt.component.html',
  styleUrls: ['./bet-slipt.component.scss'],
})
export class BetSliptComponent implements OnInit {
  public valorEmitido = this.lotteryService.recibir;
  total: string = '';
  selectedVal ='1';
  amount: any ;
  montoApostar: any;
  valueSelect : number =0;
  valido: any;
  validoMsg: any = true
  valorGanador : any;

  constructor(public lotteryService: LotteryService) {}

  ngOnInit(): void {
    console.log(this.valorEmitido,'eliana')
    this.valorEmitido.forEach(element => {
      console.log(element,'a')
      this.selectedVal = element
    })
    
  }

  calculate(amount: any) {
    console.log('calculate funciona',amount);
     if(amount >=5){
      this.montoApostar = amount * 1.5;
       this.valido = true;
       this.validoMsg = true
       
    }
    else{
      this.valido = false
      this.validoMsg = false
      this.montoApostar = ''
    }
    
    
  }

  random(){
    console.log('seleccionado',typeof(this.selectedVal));
    this.valueSelect = parseInt(this.selectedVal)
    console.log('convertir', this.valueSelect)
    let valorEntrante =Math.random() * (11 - 1) + 1
    this.valorGanador = Math.floor(valorEntrante);
    console.log('ver',this.valorGanador)
    this.emitirValor()
  }

  public emitirValor() {
    this.lotteryService.enviarDesdeHijo(this.valorGanador);
    this.montoApostar = ''
    this.amount = ''
    this.valido = false
    this.validoMsg = true

  }


}
