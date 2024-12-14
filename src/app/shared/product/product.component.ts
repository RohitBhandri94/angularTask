import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() book :any;

  isProductInCart : boolean = false;

  constructor( private cartService : CartService){}
  ngOnInit(): void {
    
  }
  
  addToCart(book:any){
    this.cartService.addProductToCart(book);
    this.isProductInCart = true;
  }

}
