
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../IMakes';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  produtos: any;
  objetos = [
    { propriedade1: 'valor1', propriedade2: 'valor2' },
    { propriedade1: 'valor3', propriedade2: 'valor4' },
    { propriedade1: 'valor5', propriedade2: 'valor6' },
    // ...
  ];
  selectedObjects: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  searchDataDogs(){
    this.apiService.searchData().subscribe((data: any) => {
      this.produtos = data;
      // this.nome = data.name;
      // this.pessoas.forEach((object: any)  => {
      //   this.nome = object.name;
      //   this.id = object.id;
      // });
    })
  }

}
