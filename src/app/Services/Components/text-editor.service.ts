import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  // This is the content to be displayed in the text editor
  private codeSource = new BehaviorSubject<string>('');
  public currentCode = this.codeSource.asObservable();

  // This is the flag to show/hide the text editor
  private showCodeSource = new BehaviorSubject<boolean>(true);
  public showCode = this.showCodeSource.asObservable();

  // This is the current language of the text editor
  private languageSource = new BehaviorSubject<string>('dockerfile');
  public currentLanguage = this.languageSource.asObservable();
  
  constructor() { }

  public setCode(code: string) {
    this.codeSource.next(code);
  }

  public getCode(): Observable<string> {
    return this.currentCode;
  }

  public setShowCode(showCode: boolean) {
    this.showCodeSource.next(showCode);
  }

  public getShowCode(): Observable<boolean> {
    return this.showCode;
  }

  public setLanguage(language: string) {
    this.languageSource.next(language);
  }

  public getLanguage(): Observable<string> {
    return this.currentLanguage;
  }
}
