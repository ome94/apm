import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl).pipe(
      tap(products => console.log('All: ', JSON.stringify(products))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map(
        (products: IProduct[]) => products.find((prod: IProduct) => prod.productId === id)
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else{
      errorMessage = `Server response: ${err.status}, \n\tError Message: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}