import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  userEmail: string;
  constructor
  (
    private authService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logoutUser().then(res => {
      console.log(res);
      this.route.navigate(['./login']);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
