import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  apiUrl = 'https://fakestoreapi.com/products';
  products: any[] = [];
  filteredProducts: any[] = [];

  currentPage = 1;
  itemsPerPage = 6;
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  get paginatedProducts(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
  searchProducts(): void {
    if (this.searchQuery) {

      this.filteredProducts = this.products.filter(products =>
        products.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
    this.currentPage = 1;
  }

}





