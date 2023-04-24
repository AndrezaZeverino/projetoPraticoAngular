
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../IProdutos';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  produtos: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts(){
    this.apiService.searchData().subscribe((data: IProduto) => {
      this.produtos = data;
      console.log(this.produtos)
    })
  }

}
