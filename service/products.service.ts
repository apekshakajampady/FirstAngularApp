import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  saveProduct(product:any[]):Observable<any> {
    return this._http.post("https://angular-first-project-19daa-default-rtdb.firebaseio.com/products.json",product)
  }
}
