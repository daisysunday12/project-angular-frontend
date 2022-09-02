import { ServicesService } from '../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: any
  constructor(private serviceService: ServicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      'password': ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
    })
  }

  createLogin(values: any) {
    this.serviceService.login(values.username, values.password).subscribe(res => {
      if (res.msg === 'login success') {
        localStorage.setItem('appToken', JSON.stringify(res))
        Swal.fire(
          'Success!',
          'Login Success!',
          'success',
        )
        this.navigateTo('./admin/dashboard')
      }
    }, err => {
      Swal.fire(
        'Login Failed',
        'Username & Password Salah!',
        'error',
      )
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
