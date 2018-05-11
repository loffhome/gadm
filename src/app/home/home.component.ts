import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { globals } from '../../global';

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
  
  constructor(public router: Router, public global: globals) { 
    if(!localStorage.getItem('Session'))
      this.router.navigateByUrl('login');
    
    this.global.viewMenu=true;
    this.viewMenu=true;
            
  }
  ngOnInit() {
    document.body.classList.remove('fondo');
    
  }

}
