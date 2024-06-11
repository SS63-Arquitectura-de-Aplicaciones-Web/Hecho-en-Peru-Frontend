import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  addCategories(data: Category) {
    return this.httpClient
      .post<Category>(`${environment.apiURL}category`, data)
      .pipe(mergeMap(() => this.getCategories()));
  }
}
