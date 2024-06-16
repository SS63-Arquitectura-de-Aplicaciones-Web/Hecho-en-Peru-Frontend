import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from './models/region';
import { environment } from '../../../../../environments/environment';
import { catchError, finalize, of } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';

@Injectable()
export class RegionsService {
  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {}

  getRegions() {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<Region[]>(`${environment.apiURL}regions`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getAllRegions() {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<Region[]>(`${environment.apiURL}allRegions`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getSearchRegionDetailsByID(id: string) {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<Region[]>(`${environment.apiURL}regionDetail/${id}`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getRegionDetailsByID(id: string) {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<Region>(`${environment.apiURL}regionDetail/${id}`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }
}
