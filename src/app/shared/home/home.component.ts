import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  books: any;

  constructor( private booksServices : BooksService){}

 ngOnInit(): void {
   this.booksServices.getAllBooks().subscribe((res)=>{
    this.books = res ;
   })
 }

}
