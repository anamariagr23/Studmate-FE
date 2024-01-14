import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './users-page/users-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { AvatarComponent } from './avatar-page/avatar/avatar.component';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form/student-details-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    SurveyPageComponent,
    SurveyFormComponent,
    AvatarComponent,
    StudentDetailsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // TO DO - future improvement use routing module for that
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'survey', component: SurveyPageComponent },
      { path: 'student-details', component: StudentDetailsFormComponent },
    ]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
