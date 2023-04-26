import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Product } from '../product.model';
import { PRODUCTS } from '../mock-products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;

  constructor(private route : ActivatedRoute, private cartService : CartService) {

  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = PRODUCTS.find(product => product.id == productId);
  }

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
