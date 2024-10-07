import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonConfigurationService {

  
  constructor() { }

  private jsonValue = new BehaviorSubject<string>('');
  currentStringValue = this.jsonValue.asObservable();

  updateStringValue(newValue: string): void {
    this.jsonValue.next(newValue);
  }

}
