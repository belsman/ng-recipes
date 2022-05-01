import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  onHandleError() {
    this.errorMessage = null;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.isLoading = true;

    let auth: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      auth = this.authService.logIn(email, password);
    } else {
      auth = this.authService.signUp(email, password);
    }

    auth.subscribe(
      (result) => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
