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
  valido: any = false;
  validoMsg: any = true
  valorGanador : any;

  constructor(public lotteryService: LotteryService) {}

  ngOnInit(): void {
    /**
     * Recorre el valor que trae el otro componente
     * y lo guarda en una variable
     */
    this.valorEmitido.forEach(element => {
      this.selectedVal = element
    })
    
  }
 /**
  * Valida el monto ingresado sea mayor o igual
  * a 5 y multiplica el valor por 1.5 
  * @param amount 
  */
  calculate(amount: any) {
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

 /**Metodo encargado de hacer el escaoger aleatoriamente el 
  * ball ganador y enviar el valor al componente padre
  * 
 */
  random(){
    this.valueSelect = parseInt(this.selectedVal)
    let valorEntrante =Math.random() * (11 - 1) + 1
    this.valorGanador = Math.floor(valorEntrante);
    this.emitirValor()
  }

  /**
   * Envia el valor al componente padre a traves del servicio
   * y limpia los campos 
   */
  public emitirValor() {
    this.lotteryService.enviarDesdeHijo(this.valorGanador);
    this.montoApostar = ''
    this.amount = ''
    this.valido = false
    this.validoMsg = true
  }
}
