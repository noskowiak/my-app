import { Component, OnInit } from '@angular/core';

export interface Person{
name: string,
lastName: string,
adres: Adres
}

interface Adres {
  street: string,
  flatNumber: number
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private _czyKliknieto: string = 'Jakas zmienna';
  private _tablica: number[] = [1,2,3,4];
  _person: Person = {name: 'Franek', lastName: 'Nowak', adres: {street: 'Ulicka', flatNumber:4}}


    constructor() { }

  ngOnInit(): void {
    this.click();
  }

  nazwaFunkcji(param: number){
     4;
  }

  click(){
  }
  
  get czyKliknieto(){
    return this._czyKliknieto;
  }

}
