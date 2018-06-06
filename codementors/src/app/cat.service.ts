import { Injectable } from "@angular/core";
import { Cat } from "./cat";
import { Subject, Observable} from "rxjs";
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CatService {
  private catsUrl = 'api/cats';

  constructor(private http: HttpClient) {}

  private catDeletedSource = new Subject<Cat>();

  catDeleted = this.catDeletedSource.asObservable();

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl)
    .pipe(
      catchError(er => this.handleError(er, []))
    );
  }

  getCatById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.catsUrl}/${id}`)
    .pipe(
      catchError(er => this.handleError(er, null))
    );
  }

  deleteCat(cat: Cat) {
    this.catDeletedSource.next(cat);
  }

  private handleError<T>(res: HttpErrorResponse, result?: T) {
    console.error(res);

    return Observable.of(result as T);
    
  }
}
