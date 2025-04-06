import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    alert('side-login-component.ts çalıştı. ===> authService e gidecek');
    if (this.form.valid) {
      const credentials = this.form.value as {
        uname: string;
        password: string;
      };

      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful', response);

          // this.router.navigate('');
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Giriş başarısız! Kullanıcı adı veya şifre yanlış olabilir.');
        },
      });
    } else {
      alert('Form hatalıi lütfen kontrol edin');
    }
  }
}
