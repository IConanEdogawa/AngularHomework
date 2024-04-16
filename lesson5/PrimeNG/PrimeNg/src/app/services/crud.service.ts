import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../moduls/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseurl = "https://localhost:7189/api/Product/GetAll";

  constructor(private http : HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.baseurl);
  }
}
