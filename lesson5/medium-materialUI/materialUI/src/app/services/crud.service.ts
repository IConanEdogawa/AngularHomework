import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../moduls/user';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  baseUrl = "https://localhost:7189/api/Product/GetAll";
  constructor(private http : HttpClient) { }

  getAll() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
}
