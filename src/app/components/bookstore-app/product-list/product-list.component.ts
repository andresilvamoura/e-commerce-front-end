import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  livros: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data) => {
      this.livros = data
    })
  }

}
