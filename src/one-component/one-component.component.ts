import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  dados: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchDataDogs(){
    this.apiService.searchData().subscribe((data => {
      this.dados = data;
    }))
  }

}
