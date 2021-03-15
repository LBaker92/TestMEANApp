import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../core/models/user';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup(): void {
    this.loginService
      .signup(
        this.signupForm.controls.username.value,
        this.signupForm.controls.password.value
      )
      .subscribe(
        (res) => {
          const user: User = {
            username: res.username
          };
          
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['home']);
        },
        (httpError: HttpErrorResponse) => {
          this.snackBar.open(`Error: ${httpError.error}`, 'Close');
        }
      );
  }
}
