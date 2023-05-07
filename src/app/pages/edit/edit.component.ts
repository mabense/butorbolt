import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  name = new FormControl('');
  pass = new FormControl('');

  loading: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    if (this.name.value === 'a' && this.pass.value === 'a') {
      this.router.navigateByUrl('/list');
      this.loading = false;
    }
    else {
      console.error('Bad name or password!');
      this.loading = false;
    }
  }

}
