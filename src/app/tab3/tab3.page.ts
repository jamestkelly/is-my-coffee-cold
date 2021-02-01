import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
