import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit {
@Input() item :any;
discountedPrice:any;
itemPrice:any;

constructor(private cartService : CartService){}

getPriceDetails(item:any){
  this.discountedPrice = this.cartService.getPriceDetailsInCartItem(item).discountedPrice;
  this.itemPrice = this.cartService.getPriceDetailsInCartItem(item).price;

}

ngOnInit(): void {
  this.getPriceDetails(this.item)
}




incItemCount(item:any){
  this.cartService.incProdCount(item);
  this.getPriceDetails(item);


}

decItemCount(item:any){
  this.cartService.decProdCount(item);
  this.getPriceDetails(item)
  }

removeItem(item:any){
      this.cartService.removeItemFromCart(item);

}


}
