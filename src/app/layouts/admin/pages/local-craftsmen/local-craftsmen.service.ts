import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalCraftsman } from './models/local-craftsman';
import { environment } from '../../../../../environments/environment';
import { catchError, finalize, of } from 'rxjs';
import { LocalCraftsmanRequest } from './models/local-craftsman-request';
import { LoadingService } from '../../../../core/services/loading.service';

@Injectable()
export class LocalCraftsmenService {
  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAllLocalCraftsmen() {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<LocalCraftsman[]>(`${environment.apiURL}AllLocalCraftsmen`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getlocalCraftsmenByRegion(regionId: string) {
    this.loadingService.setIsLoading(true);

    return this.httpClient
      .get<LocalCraftsman[]>(
        `${environment.apiURL}localCraftsmenByRegion/${regionId}`
      )
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }
}
