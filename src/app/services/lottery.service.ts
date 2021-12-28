import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  private mensajero = new ReplaySubject<string>()
  private mensajeroDesdeHijo = new ReplaySubject<string>()
  constructor() { }

  public get recibir() {
    return this.mensajero.asObservable()
  }

  public get recibirDesdeHijo() {
    return this.mensajeroDesdeHijo.asObservable()
  }

  public enviar(id: string): void {
    this.mensajero.next(id);
  }

  public enviarDesdeHijo(id: string): void {
    this.mensajeroDesdeHijo.next(id);
  }

}
