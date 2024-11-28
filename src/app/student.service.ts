import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api";
  private singleItemURL = this.baseURL + "/student";
  private multiItemsURL = this.baseURL + "/students";

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.multiItemsURL}`);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.singleItemURL}/${id}`);
  }


  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.singleItemURL}`, student);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.singleItemURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.singleItemURL}/${id}`);
    }
}
