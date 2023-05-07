import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  nam = new FormControl('', { nonNullable: true });
  pwd = new FormControl('', { nonNullable: true });

  // loadingSubscription?: Subscription;
  // loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(
    private router: Router,
    private serAuth: AuthService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    /* if (this.name.value === 'a' && this.pass.value === 'a') {
      this.router.navigateByUrl('/list');
      this.loading = false;
    }
    else {
      console.error('Bad name or password!');
      this.loading = false;
    } */
    this.serAuth.login(this.nam.value, this.pwd.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/');
      this.loading = false;
    }).catch(err => {
      console.error(err); // 'Bad password or name!'
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    // this.loadingSubscription?.unsubscribe();
  }

}
