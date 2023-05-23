import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddDoctorComponent } from './component/dashboard/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDoctorComponent } from './component/dashboard/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './component/dashboard/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './component/dashboard/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './component/auth/login/login.component';

import { BirthCertificateComponent } from './component/dashboard/birth-certificate/birth-certificate.component';
import { DeathcertificateComponent } from './component/dashboard/deathcertificate/deathcertificate.component';
import { AddBirthCertificateComponent } from './component/dashboard/birth-certificate/add-birth-certificate/add-birth-certificate.component';
import { ViewBirthCertificateComponent } from './component/dashboard/birth-certificate/view-birth-certificate/view-birth-certificate.component';
import { EditBirthCertificateComponent } from './component/dashboard/birth-certificate/edit-birth-certificate/edit-birth-certificate.component';
import { DeleteBirthCertificateComponent } from './component/dashboard/birth-certificate/delete-birth-certificate/delete-birth-certificate.component';
import { WebsiteComponent } from './website/website.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent,
    LoginComponent,
   
    BirthCertificateComponent,
        DeathcertificateComponent,
        AddBirthCertificateComponent,
        ViewBirthCertificateComponent,
        EditBirthCertificateComponent,
        DeleteBirthCertificateComponent,
        WebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddDoctorComponent]
})
export class AppModule { }
