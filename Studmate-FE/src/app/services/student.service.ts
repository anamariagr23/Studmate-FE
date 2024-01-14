import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  createStudent(student: any) {
    return this.http.post(`http://127.0.0.1:5000/students`, student);
  }
}