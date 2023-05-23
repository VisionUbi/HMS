import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';
import { BirthCertificateComponent } from './component/dashboard/birth-certificate/birth-certificate.component';
import { DeathcertificateComponent } from './component/dashboard/deathcertificate/deathcertificate.component';
import { ViewBirthCertificateComponent } from './component/dashboard/birth-certificate/view-birth-certificate/view-birth-certificate.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {path:'website' , component: WebsiteComponent},





  {path : 'dashboard' , children:[
    {path:'' , redirectTo: 'patient', pathMatch:'full'},
    {path:'patient' , component: PatientComponent},
    {path:'doctor' ,  component: DoctorComponent},
    {path:'birth-certificate' ,  component: BirthCertificateComponent},
    {path:'deathcertificate' ,  component: DeathcertificateComponent},
    {path:'doctor/:id' , component: ViewDoctorComponent},
    {path:'birthcertificate/:id' , component: ViewBirthCertificateComponent},


    {path:'patient/:id' , component: ViewPatientComponent}
  ],canActivate: [AuthguardGuard] },
  {path : 'login', component : LoginComponent},

  {path : '', redirectTo : 'login' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
