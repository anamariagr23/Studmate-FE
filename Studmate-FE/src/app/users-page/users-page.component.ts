import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/models/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(response => {
      // TypeScript now knows that response has a property `students`
      this.students = response.students;
    }, error => {
      console.error('Error fetching students:', error);
    });
  }
}
