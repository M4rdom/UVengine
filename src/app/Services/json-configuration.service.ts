import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonConfigurationService {

  
  constructor() { }

  // Inicializamos el valor con un BehaviorSubject
  private jsonValue = new BehaviorSubject<string>('');

  // Observable público que otros componentes pueden suscribirse
  currentStringValue = this.jsonValue.asObservable();

  // Método para actualizar el valor
  updateStringValue(newValue: string): void {
    this.jsonValue.next(newValue);
  }

}
