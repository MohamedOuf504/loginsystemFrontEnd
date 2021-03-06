import { openComponent } from './../../shared/Animations/openComponent';
import { AuthService } from './../../service/auth.service';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[openComponent]

})
export class ProfileComponent implements OnInit {
  changeName:boolean = false ;
  changeAge:boolean = false ;
  changePassword:boolean = false ;

  name:string='';
  age:string='';

  constructor(private Auth:AuthService , private router:Router, private ActivatedRoute:ActivatedRoute) {
   
  }
  User:any
  ngOnInit(): void {
  this.User= this.Auth.UserDate.getValue()
  this.User =this.User.data
  if(sessionStorage.getItem('newNameChanged')!= null)
  {
    this.User.name = sessionStorage.getItem('newNameChanged')
  }
  if(sessionStorage.getItem('newAgeChanged')!= null)
  { 
    this.User.age = sessionStorage.getItem('newAgeChanged')
  }
  }
  changeNameStatus()
  {
   this.changeName = !this.changeName

  }
  changeAgeStatus()
  {
   this.changeAge = !this.changeAge

  }
  changePasswordStatus()
  {
   this.changePassword = !this.changePassword

  }
}


