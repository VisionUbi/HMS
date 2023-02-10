import { Component, Inject, OnInit, ViewChild } from '@angular/core';
 
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
 
import { DataService } from 'src/app/shared/service/data.service';
import { DeleteDoctorComponent } from '../doctor/delete-doctor/delete-doctor.component';
import { AddBirthCertificateComponent } from './add-birth-certificate/add-birth-certificate.component';
import { certifiacte } from 'src/app/shared/model/certificate';
import { DeleteBirthCertificateComponent } from './delete-birth-certificate/delete-birth-certificate.component';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.css']
})
export class BirthCertificateComponent implements OnInit {
  certifiacteArr: certifiacte [] = [];
  displayedColumns: string[] = [
    'name',
    'fathername',
    'gender',
    'actions',
  ];
  dataSource!: MatTableDataSource<certifiacte>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private dataApi: DataService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBirthCertificate();
  }

  addBCertificate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Register birth Certificate',
      buttonName: 'Register',
    };
    const dialogRef = this.dialog.open(AddBirthCertificateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dataApi.addBirthCer(data);
        this.openSnackBar('Register birth Certificate sucessfully ', 'OK');
      }
    });
  }

  viewDoctor(row: any) {
    // this.router.navigate(['dashboard/birth-certificate/ss' ,row.id])
     window.open('/dashboard/birthcertificate/'+row.id,'_blank');
    console.log(row);
  }

  deleteDoctor(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Delete Birth Certificate',
      doctorName: row.name,
    };
    const dialogRef = this.dialog.open(DeleteBirthCertificateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dataApi.deleteDoctors(row.id);
        this.openSnackBar('Birth Certificate deleted sucessfully ', 'OK');
      }
    });
  }

  editDoctor(row: any) {
    if (row.id == null || row.name == null) {
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.data.title = 'Edit Doctor';
    dialogConfig.data.buttonName = 'Update';
    dialogConfig.data.birthdate = row.birthdate.toDate();
    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dataApi.updateDoctors(data);
        this.openSnackBar('Doctor is updated sucessfull ', 'OK');
      }
    });
  }

  getAllBirthCertificate() {
    this.dataApi.getAllBirthCertificate().subscribe((res) => {
      this.certifiacteArr = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
      this.dataSource = new MatTableDataSource(this.certifiacteArr);
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
