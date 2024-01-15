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
  dorms: any[] = [];
  majors: any[] = [];
  sexes: any[] = [];
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  private createForm() {
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
      { id: 1, name: 'C13' },
      { id: 2, name: 'C17' },
      { id: 3, name: 'C12' },
      { id: 4, name: 'Camelia' }
    ];
  }

  getMajors(): void {

    this.majors = [
      { id: 1, name: 'Informatica' },
      { id: 2, name: 'Informatica Aplicata' },
      { id: 3, name: 'Matematica' }
    ];
  }

  getSexes(): void {
    this.sexes = [
      { id: 1, type: 'Masculin' },
      { id: 2, type: 'Feminin' },
    ];
  }

  onSubmit(): void {
    if (this.studentForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('lastname', this.studentForm.value.lastname);
      formData.append('firstname', this.studentForm.value.firstname);
      formData.append('dorm', this.studentForm.value.dorm);
      formData.append('major', this.studentForm.value.major);
      formData.append('sex', this.studentForm.value.sex);
      this.studentService.createStudent(formData).subscribe(
        response => {
          console.log('Student created successfully', response);
        },
        error => {
          console.error('Error creating student', error);
        }
      );
    }
  }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedFile = fileList[0];
    }
  }
}
