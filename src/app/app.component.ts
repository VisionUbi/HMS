import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isWebsite:boolean=true;

  userRole!: string;
  title = 'hospital-management';
  userLoggedIn : boolean = false;
  constructor(
    private authApi : AuthService,
    private location: Location
  ) {}

  ngOnInit() {
    this.userLoggedIn = this.authApi.isUserLoggedIn();
    this.login();

    if (this.location.path()== '/website') {
      this.isWebsite= false;
    }

  }

  login() {
    // log in the user
    this.userRole = 'admin'; // or 'client'
  }
}
