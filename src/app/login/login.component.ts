import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material';   


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  viewMenu:Boolean;
  constructor(MatFormField:MatFormFieldModule) {
    this.viewMenu=false;
   }
    
  ngOnInit() {
    document.body.classList.add('fondo');
  }

}
