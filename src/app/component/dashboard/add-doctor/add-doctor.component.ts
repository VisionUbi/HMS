import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';




@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  birthdate !: Date;
  qualification !: string;
  id !: string;
  buttonName !: string;
  departments : string[]  = ['Otorhinolaryngology','General Surgery','Medicine','Gastroenterology','Paediatrics','Radiology','Orthopaedics'];

  constructor(
    private fb : FormBuilder,
    @Inject (MAT_DIALOG_DATA) data : any ,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title = data.title;
    this.id=data.id;
    this.name = data.name;
    this.mobile = data.mobile;
    this.email = data.email;
    this.gender = data.gender;
    this.department = data.department;
    this.birthdate = data.birthdate;
    this.qualification = data.qualification;
    this.buttonName = data.buttonName;
   
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id : [this.id,[]],
      name : [this.name,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      mobile : [this.mobile,[Validators.required]],
      email : [this.email,[Validators.required]],
      gender : [this.gender,[Validators.required]],
      department : [this.department,[Validators.required]],
      birthdate : [this.birthdate,[Validators.required]],
      qualification : [this.qualification,[Validators.required]],


    })
  }
  cancelRegisteration(){

    this.dialogRef.close();

  }

  registerDoctor(){
    this.dialogRef.close(this.form.value);
    
  }

}

