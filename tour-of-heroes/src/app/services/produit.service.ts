import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[]; // tab de produit


  constructor() {
this.produits = [
      { idProduit: 1, nomProduit: " pc Mac ", prixProduit: 2000, dateCreation: new Date("1/1/2021") },
      { idProduit: 2, nomProduit: " pc Asus ", prixProduit: 1000, dateCreation: new Date("1 / 2 /2021") },
       { idProduit: 3, nomProduit: " pc Samsung ", prixProduit: 1500, dateCreation: new Date("1 / 3 /2021") },
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;

  }
  ajouterProduit(prod: Produit) {
    return this.produits.push(prod);
  }

  /*
  addProduit(produit: Produit) {
    this.produits.push(produit); }

    */


  }

