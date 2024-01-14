import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthResponse } from "../../shared/models/auth-response.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(): void {
    const credentials = { email: this.email, password: this.password };

    this.http.post<AuthResponse>('http://127.0.0.1:5000/login', credentials)
      .subscribe(response => {
        const token = response.data.token;
        const details_completed = response.data.details_completed;
        console.log(response);
        localStorage.setItem('token', token);
        localStorage.setItem('details_completed', details_completed.toString());
        if (details_completed === false && response.data.id_role === 3) {
          this.router.navigate(['/student-details']);
        } else {
          this.router.navigate(['/users']);
        }

      }, error => {
        console.error('Login failed:', error);
      });
  }
}
