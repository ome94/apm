import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product';
  product: IProduct | undefined;
  imageWidth: number = 200;
  imageMargin: number = 2;

  sub!: Subscription;
  errorMessage!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productSvc: ProductService
              ) { }

  onBack(): void {
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productSvc.getProduct(id).subscribe(
      product => this.product = product,
      err => this.errorMessage = err
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
