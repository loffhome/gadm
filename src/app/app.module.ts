import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { globals } from '../../src/global';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,  
  MatGridListModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'config', component: ConfigComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule  
  ],
  providers: [globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
