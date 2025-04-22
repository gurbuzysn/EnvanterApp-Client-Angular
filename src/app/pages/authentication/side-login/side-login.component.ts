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
import Swal from 'sweetalert2'

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
    UserName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      const credentials = this.form.value as {
        UserName: string;
        Password: string;
      };

      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful', response);

          // this.router.navigate('');
        },
        error: (error) => {
          console.error('Login failed', error);
          Swal.fire({
            title: 'Hata',
            text: 'Kullanıcı adı veya şifre hatalı',
            icon: 'error',
            confirmButtonText: 'Tekrar Dene!'

          })
        },
      });
    } else {
      Swal.fire({
         title: 'Hata',
         text: 'Form hatalı lütfen kontrol edin',
         icon: 'error',
         confirmButtonText: 'Tekrar Dene!'
      })
    }
  }
}
