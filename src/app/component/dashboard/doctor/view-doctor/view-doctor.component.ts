import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/model/patient';
import { DataService } from 'src/app/shared/service/data.service';
import { AddPatientComponent } from '../../patient/add-patient/add-patient.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css'],
})
export class ViewDoctorComponent implements OnInit {
  doctorObj!: any;
  id!: any;

  displayedColumns: string[] = [
    'name',
    'mobile',
    'gender',
    'prescription',
    'actions',
  ];
  dataSource!: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  allPatients: Patient[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataApi: DataService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');


  this.getDoctorsbyId();
    this.getAllPatientsForDoctor();
  }

  getDoctorsbyId() {
    this.dataApi.getDoctorsbyID(this.id).subscribe((res) => {
      this.doctorObj = res;

      console.log(this.doctorObj);
    });
  }

  getAllPatientsForDoctor() {
    this.dataApi.getAllPatients().subscribe((res) => {
      this.allPatients = res.map((e: any) => {
        const data = e.payload.doc.data();
        if (data.doctor_id == this.id) {
          data.patient_id = e.payload.doc.id;
          return data;
        }
      });

      this.allPatients = this.allPatients.filter((item) => item != undefined);
      this.dataSource = new MatTableDataSource(this.allPatients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewPatient(row: any) {
    // window.open('/dashboard/patient/'+row.patient_id,'_blank');
  }
  editPatient(row: any) {
    if (row.patient_id == null || row.patient_name == null) {
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.data.title = 'Edit patient';
    dialogConfig.data.buttonName = 'Update';
    dialogConfig.data.admission_date = row.admission_date.toDate();

    console.log(dialogConfig.data);

    const dialogRef = this.dialog.open(AddPatientComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dataApi.updatePatient(data);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
