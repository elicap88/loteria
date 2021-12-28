import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { LotteryService } from 'src/app/services/lottery.service';


@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent implements OnInit {
  public valorDevuelto = this.lotteryService.recibirDesdeHijo;
  
  constructor(public lotteryService: LotteryService) {}

  selectedVal ='1';
  valorDevuelto2 ='';
  propagar = new EventEmitter<string>();
  amountInt : number =0;
  verBalls  = true;

  ngOnInit(): void {
    //Recorre el valor que devuelve el servicio desde el componente hijo
    this.valorDevuelto.forEach(element => {
      console.log(element,'alonzo')
      this.valorDevuelto2= element
      this.verBalls = false
    })
  }

  clear() {
    this.lotteryService.enviar('');
  }
/**
 * Metodo que toma el valor de los balls
 * @param val 
 */
  public onValChange(val: string) {
    this.selectedVal = val;
    this.emitirValor()
  }

  onPropagar() {
    this.propagar.emit(this.selectedVal);
  }

  /**
   * Envia el valor al servicio para la comunicación 
   * entre componentes
   */
  public emitirValor() {
    this.lotteryService.enviar(this.selectedVal);
  }

  try() {
    return this.verBalls = true;
  }
  
}
