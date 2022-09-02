import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pekerjaan-form',
  templateUrl: './pekerjaan-form.component.html',
  styleUrls: ['./pekerjaan-form.component.css']
})
export class PekerjaanFormComponent implements OnInit {
  pekerjaanForm: any;
  id: any;
  buttonText = 'Create Pekerjaan';

  constructor(private apiService: ApiservicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createPekerjaanForm();
    let id = '';
    if (this.activatedRouter.snapshot.params['id']) {
      id = this.activatedRouter.snapshot.params['id'];
      if (id !== '') {
        this.loadPekerjaanDetails(id);
      }
    }
  }
  createPekerjaanForm() {
    this.pekerjaanForm = this.formBuilder.group({
      'pekerjaan': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'deskripsiPekerjaan': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    })
  }

  createPekerjaan(values: any) {
    let formData = new FormData();
    formData.append('pekerjaan', values.pekerjaan);
    formData.append('deskripsiPekerjaan', values.deskripsiPekerjaan);
    if (this.id) {
      formData.append('id', this.id);
      this.apiService.updatePekerjaanDetails(this.id, formData).subscribe(res => {
        if (res.msg === 'success') {
          this.navigateTo('./admin/pekerjaan')
          Swal.fire(
            'Success!',
            'Your file has been update.',
            'success',
          )
        } else {
          Swal.fire(
            'Failed!',
            'Your file has been update.',
            'error',
          )
        }
      })
    } else {
      this.apiService.createPekerjaan(formData).subscribe(res => {
        if (res.msg === 'success') {
          Swal.fire(
            'Success!',
            'Your file has been created.',
            'success',
          )
          this.navigateTo('./admin/pekerjaan')
        } else {
          Swal.fire(
            'Failed!',
            'Your file has been failed.',
            'error',
          )
        }
      })
    }
  }
  loadPekerjaanDetails(pekerjaanId: any) {
    this.buttonText = 'Update Pekerjaan';
    this.apiService.loadPekerjaanInfo(pekerjaanId).subscribe(res => {
      this.pekerjaanForm.controls.pekerjaan.setValue(res.pekerjaan);
      this.pekerjaanForm.controls.deskripsiPekerjaan.setValue(res.deskripsiPekerjaan);
      this.id = res.id;
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
