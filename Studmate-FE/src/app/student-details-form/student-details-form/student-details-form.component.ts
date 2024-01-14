import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details-form',
  templateUrl: './student-details-form.component.html',
  styleUrls: ['./student-details-form.component.scss']
})
export class StudentDetailsFormComponent implements OnInit {
  studentForm!: FormGroup;
  dorms = [
    { id: 1, name: 'Dormitory A' },
    { id: 2, name: 'Dormitory B' },
    { id: 3, name: 'Dormitory C' }
  ];
  majors: any[] = []; // Populate from the majors table
  sexes: any[] = []; // Populate from the sex table

  constructor(private fb: FormBuilder, private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      dorm: [''],
      major: [''],
      sex: [''],
      description: [''],
      avatar_image: ['']
    });

    this.getDorms();
    this.getMajors();
    this.getSexes();
  }

  getDorms(): void {
    this.dorms = [
      { id: 1, name: 'Dormitory A' },
      { id: 2, name: 'Dormitory B' },
      { id: 3, name: 'Dormitory C' }
    ];
  }

  getMajors(): void {

    this.majors = [
      { id: 1, name: 'Computer Science' },
      { id: 2, name: 'Mechanical Engineering' },
      { id: 3, name: 'Physics' }
    ];
  }

  getSexes(): void {
    this.sexes = [
      { id: 1, type: 'Male' },
      { id: 2, type: 'Female' },
      { id: 3, type: 'Other' }
    ];
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        response => {
          console.log('Student created successfully', response);
        },
        error => {
          console.error('Error creating student', error);
        }
      );
    }
  }
}
