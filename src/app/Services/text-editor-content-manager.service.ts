import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextEditorContentManagerService{
  private codeSource = new BehaviorSubject<string>('');
  public currentCode = this.codeSource.asObservable();

  constructor() { }

  public changeCode(code: string) {
    this.codeSource.next(code);
  }

}
