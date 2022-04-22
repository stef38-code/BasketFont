import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Joueur} from '../../share/dto';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {
  url = 'http://localhost:8080/api/joueurs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Origin: '*'
    }),
  };

  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<Joueur>> {
    return this.http
      .get<Array<Joueur>>(this.url)
      .pipe(
        map((response: any) => {
          return response as Array<Joueur>;
        }),
        retry(1),
        catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
