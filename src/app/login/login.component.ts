import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material';   
import { Router } from '@angular/router';
import { globals } from '../../global';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  viewMenu:Boolean;
  login:Object={
    user:"",
    password:""
  };
  

  constructor(public MatFormField:MatFormFieldModule, public router: Router, public global: globals) {
    this.viewMenu=false;
   
  }

   userLogin() {
    //Aqui se llama al servicio de login y se guarda el dato del Hash de session;
    localStorage.setItem("Session", "asdfg1");
    this.router.navigate(['home']);
     }
    
  ngOnInit() {
    document.body.classList.add('fondo');
  }

}
