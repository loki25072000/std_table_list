import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, } from '@angular/forms';
import { makeArray } from 'jquery';
// import { on } from 'cluster';
declare var $;
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  studentForm: FormGroup;
  details: FormArray;
  get MultiFildeSet() { return <FormArray>this.studentForm.get('details') }
  createFormControl() {
    this.studentForm = this.formbuilder.group({
      details: this.formbuilder.array([this.createItem()]),
    });
  }
  constructor(private formbuilder: FormBuilder) {

  }

  createItem(): FormGroup {
    return this.formbuilder.group({
      'id': [null],
      'name': [null, Validators.required],
      'age': [null, Validators.required],
      'gender': [null, Validators.required],
      'education': [null, Validators.required],
      'eligible': [null, Validators.required],
      'status': false,
    })
  }
  // get hubbyControls(){
  //   return (<FormArray>this.studentForm.get('hobbies')).controls
  // }
  ngOnInit() {
    this.createFormControl()
    this.getDetails()

  }
  stdArrays = new Array();
  studentVlaues: any;
  val;


  submit(index) {
    this.studentVlaues = this.studentForm.value
    // this.studentVlaues.details.status = this.tablestatus
    this.val = this.studentVlaues.details
    // this.val.status=this.tablestatus
    // console.log(this.val)

    for (let i = 0; i < this.val.length; i++) {

      // console.log(this.val[i])
      let obj = this.val[i]
      if (localStorage.getItem('niro') == null) {
        localStorage.setItem('niro', '[]')
      }
      this.stdArrays = JSON.parse(localStorage.getItem('niro'))
      this.stdArrays.push(this.val[i])
      localStorage.setItem('niro', JSON.stringify(this.stdArrays))


    }
    // console.log(this.studentVlaues.details)
    // if (localStorage.getItem('val') == null) {
    //   localStorage.setItem('val', '[]')
    // }
    // this.stdArrays = JSON.parse(localStorage.getItem('val'))
    // this.stdArrays.push(this.studentVlaues.details)
    // localStorage.setItem('val', JSON.stringify(this.stdArrays))
    // console.log(this.stdArrays)

    // localStorage.setItem('valu',this.studentVlaues.details)
    // localStorage.getItem('valu')
    // console.log(this.studentVlaues.details)
    this.getDetails()
    this.studentForm.reset()
  }
  getDetails() {
    if (localStorage.getItem('niro') == null) {
      localStorage.setItem('niro', '[]')
    }
    this.stdArrays = JSON.parse(localStorage.getItem('niro'))


  }
  status;
  staId;
  onStatusChange(val, index, e) {
    //  console.log( e.target.id)
    this.staId = e.target.id
    // console.log(this.stdArrays)
    // debugger
    this.stdArrays
    for (let i = 0; i < this.stdArrays.length; i++) {

      var arr = this.stdArrays[i]
      if (arr == val) {
        $('#statusModal').modal('show')
        if (val.status == false) {
          arr.status = true
          //  console.log(arr)
        }
        else if (val.status == true) {
          arr.status = false
        }
        let newArray = this.stdArrays[index].arr
        //   console.log(newArray)
        //  console.log(this.stdArrays)
        localStorage.setItem('niro', JSON.stringify(this.stdArrays))
        // console.log(this.stdArrays)
      }
    }

  }
  tablestatus;
  tableStatus(data) {
    console.log(data.value)
    // this.tablestatus = data.status = true
    // console.log(this.tablestatus)

  }
  confirmStatus() {
    $('#statusModal').modal('hide')

  }
  cancelStaus() {
    // for(let i=0;i<this.stdArrays.length;i++){}
    console.log(this.staId);

    if (this.stdArrays[this.staId].status == false) {
      this.stdArrays[this.staId].status = true
      localStorage.setItem('niro', JSON.stringify(this.stdArrays))
    }
    else if (this.stdArrays[this.staId].status == true) {
      this.stdArrays[this.staId].status = false
      localStorage.setItem('niro', JSON.stringify(this.stdArrays))
    }
    $('#statusModal').modal('hide')
  }
  patchDetails(val, id) {
    // debugger
    // console.log(this.stdArrays)
    this.stdArrays.forEach((value, index) => {
      if (val == value) {
        console.log(val)
        this.studentForm.patchValue(value)
        $('#myModal').modal('show')
      }
    })

  }
  addRow() {
    //   const control= new FormControl(null,[Validators.required]);
    //   (<FormArray>this.studentForm.get('hobbies')).push(control)
    this.details = <FormArray>this.studentForm.get('details');
    this.details.push(this.createItem());
  }
  deleteRow(index) {
    this.details = <FormArray>this.studentForm.get('details');
    this.details.removeAt(index);
  
  }
  deleteData(data, indexValue) {
    console.log(data)
    this.stdArrays.forEach((value, index) => {
      if (value == data) {
        this.stdArrays.splice(index, 1);
        delete this.stdArrays[index]
        localStorage.setItem('niro', JSON.stringify(this.stdArrays))

      }
    })



  }
}


