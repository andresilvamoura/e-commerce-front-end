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
    this.livros = this.bookService.getBook().subscribe((data) => {
      console.log('%c' + JSON.stringify(data, null, 2), 'background: black; color: lawngreen; font-size: 16px;')
    })
  }

}
