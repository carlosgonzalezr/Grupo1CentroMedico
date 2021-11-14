import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

export class Persona {
      
  correo: string;
  rut: string;
  nombre: string;
  apellido: string;
  direccion: string;
  comuna: number;
  password: string;
  repeatPassword: string;
  celular: number;
  enfermedades: string;
  alergias: string;
  sexo: string;


}

@Injectable({
  providedIn: 'root'
})
export class PersonaCrudService {

  endpoint = "https://jpalomo.pythonanywhere.com/api/pacientes/";


  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Token 7f4f2dc7c09d9a33fbee28ce1c321000f0490dea' })
  };

  constructor(private HttpClient: HttpClient) { }

  createPersona(persona: Persona): Observable<any> {
    return this.HttpClient.post<Persona>(this.endpoint, JSON.stringify(persona), this.httpOptions)
      .pipe(
        catchError(this.handleError<Persona>('Error occured'))
      );
  }

  getPersona(): Observable<Persona[]> {
    return this.HttpClient.get<Persona[]>(this.endpoint + '/' , this.httpOptions)
      .pipe(
        tap(_ => console.log(`Persona`)),
        catchError(this.handleError<Persona[]>(`Get Persona`))
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
