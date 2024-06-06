import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/shared/models/auth-response.interface';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private navigationService: NavigationService) { }

  loginWithPassword(email: string, password: string): Observable<AuthResponse> {
    const credentials = { email, password };
    return this.http.post<AuthResponse>('https://127.0.0.1:5000/login', credentials);
  }

  loginWithGoogle(credential: string): Observable<AuthResponse> {
    const form = new FormData();
    form.append('credential', credential);
    return this.http.post<AuthResponse>("https://localhost:5000/google-login", form);
  }

  handleAuthenticationResponse(response: AuthResponse) {
    const token = response.data.token;
    const details_completed = response.data?.details_completed;
    console.log(response);
    localStorage.setItem('token', token);
    if (details_completed) {
      localStorage.setItem('details_completed', details_completed.toString());
    }

    if (!details_completed && response.data.id_role === 3) {
      this.navigationService.navigateToStudentDetails();
    } else {
      this.navigationService.navigateToUsers();
    }
  }

  handleError(error: any) {
    console.error('Login failed:', error);
  }
}
