import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DormResponse, Major, MajorResponse, Student, StudentsResponse, SexResponse } from 'src/shared/models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  updateStudent(student: any) {
    return this.http.patch(`https://127.0.0.1:5000/students`, student);
  }

  getStudents(): Observable<StudentsResponse> {
    return this.http.get<StudentsResponse>(`https://127.0.0.1:5000/students`);
  }

  getMajors(): Observable<MajorResponse> {
    return this.http.get<MajorResponse>(`https://127.0.0.1:5000/majors`);
  }

  getDorms(): Observable<DormResponse> {
    return this.http.get<DormResponse>(`https://127.0.0.1:5000/dorms`);
  }

  getSexes(): Observable<SexResponse> {
    return this.http.get<SexResponse>(`https://127.0.0.1:5000/sexes`);
  }
}



