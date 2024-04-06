import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentsResponse } from 'src/shared/models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  createStudent(student: any) {
    return this.http.post(`https://127.0.0.1:5000/students`, student);
  }

  getStudents(): Observable<StudentsResponse> {
    return this.http.get<StudentsResponse>(`https://127.0.0.1:5000/students`);
  }
}



