import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginGroup:FormGroup;
signupGroup:FormGroup;
emailPertan=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){2,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private formbuilder:FormBuilder ,private router:Router,private _data:DataServiceService) { 
  this.loginGroup = this.formbuilder.group({
    'email': [null, Validators.compose([Validators.required,Validators.pattern(this.emailPertan)])],
    'password':[null,Validators.required]
  });
  this.signupGroup = this.formbuilder.group({
    'name':[null,Validators.required],
    'email':[null,Validators.compose([Validators.required,Validators.pattern(this.emailPertan)])],
    'password':[null,Validators.required],
    'confirmPassword':[null,Validators.required]
  })
  }
visible:boolean = true;
changeType:boolean = true
viewPass(){
  this.visible = !this.visible
  this.changeType = !this.changeType
}
  ngOnInit() {
    localStorage.removeItem('loginvalues')
  }

isSignUP:boolean=false;
signUP(val){
 
  return this.isSignUP=val
}
signUpSubmit(){
  if(this.signupGroup.invalid){
    this.markFormGroupTouched(this.signupGroup)
  }
}
loginFunction(){
  let loginvalues = this.loginGroup.value
  console.log(loginvalues)
  if(loginvalues.email == "lokesh@123.com" && loginvalues.password == "123456"){
this.router.navigateByUrl('/dashboard/home')
localStorage.setItem("loginvalues",JSON.stringify(loginvalues))

  }
  else if(loginvalues.email ==null && loginvalues.password ==null){
 
     this.markFormGroupTouched(this.loginGroup)

  }
  else{
    alert('Invalid email & password')

  }
 
}
private markFormGroupTouched(formGroup: FormGroup) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      this.markFormGroupTouched(control);
    }
  });
}

numbervalidation(event) {
  const pattern = /[0-9]/;
  let inputchar = String.fromCharCode(event.charCode)
  if (!pattern.test(inputchar)) {
    event.preventDefault();
  }
}
namevalidation(event: any) {
  const pattern = /^[A-Za-z-.-]+$/;
  let inputchar = String.fromCharCode(event.charCode)
  if (!pattern.test(inputchar)) {
    event.preventDefault();
  }
}
}
