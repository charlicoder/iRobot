import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Article } from './interfaces/article';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = '/api/article';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            return of(result as T);
        };
    }

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(apiUrl, httpOptions)
            .pipe(
                tap(article => console.log('fetched articles')),
                catchError(this.handleError('getArticles', []))
            )
    }
}
