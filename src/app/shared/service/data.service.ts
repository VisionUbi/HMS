import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  addDoctor(doctor :any ){
    doctor.id= this.afs.createId();
    return this.afs.collection("Doctor/").add(doctor);
  }
  addBirthCer(birthCertificate :any ){
    birthCertificate.id= this.afs.createId();
    return this.afs.collection("BirthCertificate/").add(birthCertificate);
  }

  getAllDoctors(){
       return this.afs.collection("Doctor/").snapshotChanges();
  }
  getAllBirthCertificate(){
    return this.afs.collection("BirthCertificate/").snapshotChanges();
}

  updateDoctors(doctor : any){
    return this.afs.doc("Doctor/"+doctor.id).update(doctor);
}

deleteDoctors(id : string){
  return this.afs.doc("Doctor/"+id).delete();
}
deleteBirthCertificate(id : string){
  return this.afs.doc("BirthCertificate/"+id).delete();
}
getDoctorsbyID(id : string){
  return this.afs.doc("Doctor/"+id).valueChanges();
}
getbirthcertificatebyId(id : string){
  return this.afs.doc("BirthCertificate/"+id).valueChanges();
}

addPatient(patient :any ){
  patient.patient_id= this.afs.createId();
  return this.afs.collection("Patient/").add(patient);
}
getAllPatients(){
  return this.afs.collection("Patient/").snapshotChanges();
}
updatePatient(patient : any) {
  return this.afs.doc("Patient/"+patient.patient_id).update(patient);
}

deletePatient(id : string) {
  return this.afs.doc("Patient/"+id).delete();
}


getPatientById(id : any) {
  return this.afs.doc("Patient/"+id).valueChanges();
}

 

}
