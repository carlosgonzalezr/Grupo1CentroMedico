import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Agenda {
  _id: string;
  paciente: string;
  medico: string;
  especialidad: string;
  fecha: string;
  hora: string;
  sucursal: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaCrudService {
  endpoint = 'https://jpalomo.pythonanywhere.com/api/agenda/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 7f4f2dc7c09d9a33fbee28ce1c321000f0490dea' })
  };

  constructor(private httpClient: HttpClient) { }

  createAgenda(agenda: Agenda): Observable<any> {
    return this.httpClient.post<Agenda>(this.endpoint, JSON.stringify(agenda), this.httpOptions)
      .pipe(
        catchError(this.handleError<Agenda>('Error occured'))
      );
  }

  getAgenda(id): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Agenda fetched: ${id}`)),
        catchError(this.handleError<Agenda[]>(`Get agenda id=${id}`))
      );
  }

  getAgendas(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.endpoint, this.httpOptions)
      .pipe(
        tap(agendas => console.log('Agenda retrieved!')),
        catchError(this.handleError<Agenda[]>('Get agenda', []))
      );
  }

  updateAgenda(id, agenda: Agenda): Observable<any> {
    return this.httpClient.patch(this.endpoint + '/' + id, JSON.stringify(agenda), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Agenda updated: ${id}`)),
        catchError(this.handleError<Agenda[]>('Update agenda'))
      );
  }

  deleteAgenda(id): Observable<Agenda[]> {
    return this.httpClient.delete<Agenda[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Agenda deleted: ${id}`)),
        catchError(this.handleError<Agenda[]>('Delete agenda'))
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

//user agenda