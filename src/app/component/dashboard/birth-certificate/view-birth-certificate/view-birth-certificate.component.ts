import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
 import { ActivatedRoute } from '@angular/router';
 
import { DataService } from 'src/app/shared/service/data.service';


@Component({
  selector: 'app-view-birth-certificate',
  templateUrl: './view-birth-certificate.component.html',
  styleUrls: ['./view-birth-certificate.component.css']
})
export class ViewBirthCertificateComponent implements OnInit {
  birthcertificateObj!: any;
  id!: any;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private route : ActivatedRoute,
    private dataApi : DataService
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }
 
  ngOnInit(): void {
    
    this.getbirthcertificatebyId() ;
   
  }

  getbirthcertificatebyId() {
    this.dataApi.getbirthcertificatebyId(this.id).subscribe((res) => {
      this.birthcertificateObj = res;
      this.birthcertificateObj.birthdate = this.birthcertificateObj.birthdate.toDate();

      console.log(res);
    });
  }

 
 
 
}
