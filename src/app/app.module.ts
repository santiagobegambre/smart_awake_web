import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      HomeComponent,
      UsersComponent,
      QuestionsComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }