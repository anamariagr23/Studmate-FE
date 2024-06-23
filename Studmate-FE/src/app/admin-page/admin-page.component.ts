import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Dorm, DormResponse } from 'src/shared/models/student.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  adminEmail: string = '';
  selectedDormId: number | null = null;
  dorms: Dorm[] = [];

  constructor(
    private studentService: StudentService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDorms();
  }

  getDorms(): void {
    this.studentService.getDorms().subscribe(
      response => {
        this.dorms = response.dorms;
      },
      error => {
        console.error('Error fetching dorms', error);
      }
    );
  }

  generateRandomPassword(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';

    const getRandomLetter = () => letters[Math.floor(Math.random() * letters.length)];
    const getRandomDigit = () => digits[Math.floor(Math.random() * digits.length)];

    const passwordLength = Math.floor(Math.random() * (10 - 6 + 1)) + 6; // Random length between 6 and 10
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password += getRandomLetter();
    }

    // Add two random digits at the end of the password
    password += getRandomDigit();
    password += getRandomDigit();

    return password;
  }

  onSubmit(): void {
    const password = this.generateRandomPassword();
    const newUser = {
      email: this.adminEmail,
      password: password,
      id_role: 2
    };

    console.log(`Email: ${this.adminEmail}, Password: ${password}`);

    this.http.post('https://127.0.0.1:5000/users', newUser).subscribe(
      response => {
        console.log('Dorm admin created successfully:', response);
      },
      error => {
        console.error('Error creating dorm admin:', error);
      }
    );
  }

}
