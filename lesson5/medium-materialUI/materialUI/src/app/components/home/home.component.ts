import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Product } from '../../moduls/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private _crud : CrudService){}

  displayedColumns: string[] = ['id', 'name', 'expiryDate', 'price'];
  dataSource = this._crud.getAll();
}
