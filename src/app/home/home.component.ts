import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.myFunction()
    console.log(this.stdArrays)
  }

  stdArrays:any= new Array()
myFunction(){
  if(localStorage.getItem('niro')==null){
    localStorage.setItem('niro','[]')
   }
   this. stdArrays=JSON.parse(localStorage.getItem('niro'))


}
// patchValues(val) {
//   console.log(val)
//   // this.studentForm.patchValue(val)
  
// }
// onStatusChange(val){
//   val.status=!val.status
//   console.log('status',val.status)
// }
}
