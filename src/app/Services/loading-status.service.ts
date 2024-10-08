import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {
  loading_templates_list: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;
  public loading_templates_list$ = this.loading_templates_list.asObservable();

  loading_product: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;
  public loading_product$ = this.loading_product.asObservable();

  constructor() { }

  setLoadingTemplatesList(status: boolean) {
    this.loading_templates_list.next(status);
  }

  getLoadingTemplatesList() {
    return this.loading_templates_list$;
  }

  setLoadingProduct(status: boolean) {
    this.loading_product.next(status);
  }

  getLoadingProduct() {
    return this.loading_product$;
  }

}
