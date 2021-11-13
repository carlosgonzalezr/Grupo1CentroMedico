import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Paciente {
  correo: string;
  rut: string;
  nombre: string;
  apellido: string;
  direccion: string;
  comuna: number;
  password: string;
  repeatPassword: string;
  celular: string;
  enfermedades: string;
  alergias: string;
  sexo: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsercrudService {

  endpoint = 'https://jpalomo.pythonanywhere.com/api/pacientes/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 7f4f2dc7c09d9a33fbee28ce1c321000f0490dea'})
  };

  constructor(private httpClient: HttpClient) { }

  getUser(correo): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.endpoint + correo, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User fetched: ${correo}`)),
        catchError(this.handleError<Paciente[]>(`Get user id=${correo}`))
      );
  }
 
  updatePaciente(correo, user: Paciente): Observable<any> {
    return this.httpClient.patch(this.endpoint + correo, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${correo}`)),
        catchError(this.handleError<Paciente[]>('Update user'))
      );
  }

  deleteUser(correo): Observable<Paciente[]> {
    return this.httpClient.delete<Paciente[]>(this.endpoint + correo, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<Paciente[]>('Delete user'))
      );
  }
  
}  
