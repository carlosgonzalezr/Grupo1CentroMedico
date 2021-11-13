import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Pago {
  _id: string;
  tipo: string;
  agenda: number;
  fecha: string;
  monto: number;
}

@Injectable({
  providedIn: 'root'
})
export class PagoCrudService {
  endpoint ='https://jpalomo.pythonanywhere.com/api/pagos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 7f4f2dc7c09d9a33fbee28ce1c321000f0490dea' })
  };

  constructor(private httpClient: HttpClient) { }

  createPago(pago:Pago): Observable<any>{
    return this.httpClient.post<Pago>(this.endpoint,JSON.stringify(pago), this.httpOptions)
    .pipe(
      catchError(this.handleError<Pago>('Ocurrio un error'))
    );
  }

  getPago(): Observable<Pago[]> {
    return this.httpClient.get<Pago[]>(this.endpoint, this.httpOptions)
      .pipe(
        tap(agendas => console.log('Pago retrieved!')),
        catchError(this.handleError<Pago[]>('Get Pago', []))
      );
  }

  updatePago(id, pago: Pago): Observable<any> {
    return this.httpClient.patch(this.endpoint + '/' + id, JSON.stringify(pago), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Pago updated: ${id}`)),
        catchError(this.handleError<Pago[]>('pago actualizado'))
      );
  }
  deletePago(id): Observable<Pago[]> {
    return this.httpClient.delete<Pago[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Pago eliminado: ${id}`)),
        catchError(this.handleError<Pago[]>('Pago eliminado'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
