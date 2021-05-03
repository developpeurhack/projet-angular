import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits: Produit[]; // tableau de chaine de caracteres


  constructor() {


    this.produits = [
      { idProduit: 1, nomProduit: " pc Mac ", prixProduit: 2000, dateCreation: new Date(1 / 1 / 2021) },
      { idProduit: 2, nomProduit: " pc Asus ", prixProduit: 1000, dateCreation: new Date(1 / 2 / 2021) },
       { idProduit: 3, nomProduit: " pc Samsung ", prixProduit: 1500, dateCreation: new Date(1 / 3 / 2021) },
    ];
   }

  ngOnInit(): void {
  }

}
