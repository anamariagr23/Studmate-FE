import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UsersPageComponent} from './users-page/users-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    SurveyPageComponent,
    SurveyFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // TO DO - future improvement use routing module for that
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'users', component: UsersPageComponent},
      {path: 'survey', component: SurveyPageComponent},
    ]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
