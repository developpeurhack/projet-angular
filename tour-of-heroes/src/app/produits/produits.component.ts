import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {
  produits : string[]; // tableau de chaine de caracteres
  constructor() {
    this.produits = ["pc Mac", " pc Asus", "pc Samsung"];
   }

  ngOnInit(): void {
  }

}
