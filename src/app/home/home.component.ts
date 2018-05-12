import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  viewMenu:Boolean; 
  
  constructor(public router: Router) { 
    if(!localStorage.getItem('Session'))
    
    {  
      this.router.navigateByUrl('login');
    }
  }
  ngOnInit() {
    document.body.classList.remove('fondo');
    
  }

}
