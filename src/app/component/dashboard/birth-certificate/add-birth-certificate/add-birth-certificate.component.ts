import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BirthCertificateComponent } from '../birth-certificate.component';

@Component({
  selector: 'app-add-birth-certificate',
  templateUrl: './add-birth-certificate.component.html',
  styleUrls: ['./add-birth-certificate.component.css']
})
export class AddBirthCertificateComponent implements OnInit {
  form !: FormGroup;
  title !: string;
  name !: string;
  fathername !: string;
  gender !: string;
  birthdate !: Date;
  id !: string;
  buttonName !: string;
 
  constructor(
    private fb : FormBuilder,
    @Inject (MAT_DIALOG_DATA) data : any ,
    private dialogRef : MatDialogRef<BirthCertificateComponent>
  ) { 
    this.title = data.title;
    this.id=data.id;
    this.name = data.name;
    this.fathername = data.mobile;
  
    this.gender = data.gender;
 
    this.birthdate = data.birthdate;
 
    this.buttonName = data.buttonName;

  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id : [this.id,[]],
      name : [this.name,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      fathername : [this.fathername,[Validators.required]],
      
      gender : [this.gender,[Validators.required]],
      
      birthdate : [this.birthdate,[Validators.required]],
    })
  }
 
  cancelRegisteration(){

    this.dialogRef.close();

  }

  registerDoctor(){
    this.dialogRef.close(this.form.value);
    
  }
}
