import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  
  sub!: Subscription;
  errorMessage!:string;
  
  constructor(private productSvc: ProductService) {}

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  };

  set listFilter(filterString: string) {
    this._listFilter = filterString;
    this.filteredProducts = this.filterProducts(this.listFilter);
  };
  
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  };

  filterProducts(filterBy: string): IProduct[] {
    filterBy = this.listFilter.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) => 
          product.productName.toLocaleLowerCase().includes(filterBy)
    );
  };

  onRatingClicked(message: string): void {
    this.pageTitle += message;
  };

  ngOnInit(): void {
    this.sub = this.productSvc.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      err => this.errorMessage = err
    );
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}