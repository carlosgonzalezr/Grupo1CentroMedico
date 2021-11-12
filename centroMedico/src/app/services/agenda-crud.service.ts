import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Agenda {
  _id: number;
  correo: string;
  id_medico: number;
  fecha_inicio: string;
  fecha_termino: string;
  id_sucursal: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaCrudService {
  endpoint = 'https://jpalomo.pythonanywhere.com/api/agenda/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 6aba75be8bf8c33b188a3c3696af26e1ba5b2cf9' })
  };

  constructor(private httpClient: HttpClient) { }

  createAgenda(agenda: Agenda): Observable<any> {
    return this.httpClient.post<Agenda>(this.endpoint, JSON.stringify(agenda), this.httpOptions)
      .pipe(
        catchError(this.handleError<Agenda>('Error occured'))
      );
  }
}
