import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lamar-pekerjaan',
  templateUrl: './lamar-pekerjaan.component.html',
  styleUrls: ['./lamar-pekerjaan.component.css']
})
export class LamarPekerjaanComponent implements OnInit {
  // @ts-ignore
  pekerjaanDetails: any;
  kandidatForm: any;
  constructor(private serviceService: ServicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const Id = this.activatedRouter.snapshot.params['id'];
    this.actionRender(Id);
    this.createKandidatForm();
  }
  actionRender(params: any) {
    this.serviceService.getPekerjaanDetails(params).subscribe(res => {
      this.pekerjaanDetails = res;
    })
  }

  createKandidatForm() {
    this.kandidatForm = this.formBuilder.group({
      'nama': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email])],
      'jk': ['', Validators.compose([Validators.required])],
      'tempat': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'tanggal': ['', Validators.compose([Validators.required])],
      'alamat': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'kab': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'prov': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'kewarganegaraan': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'notelp': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(14)])],
      'pendidikan': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      'jurusan': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'lokasi': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
      'sumber': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      'sumberket': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
      'salary': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
    })
  }

  createKandidat(values: any) {
    let formData = new FormData();
    formData.append('nama', values.nama);
    formData.append('email', values.email);
    formData.append('jk', values.jk);
    formData.append('tempat', values.tempat);
    formData.append('tanggal', values.tanggal);
    formData.append('alamat', values.alamat);
    formData.append('kab', values.kab);
    formData.append('prov', values.prov);
    formData.append('kewarganegaraan', values.kewarganegaraan);
    formData.append('notelp', values.notelp);
    formData.append('pendidikan', values.pendidikan);
    formData.append('jurusan', values.jurusan);
    formData.append('lokasi', values.lokasi);
    formData.append('sumber', values.sumber);
    formData.append('sumberket', values.sumberket);
    formData.append('salary', values.salary);
    formData.append('pekerjaan', this.activatedRouter.snapshot.params['id']);

    const id = this.activatedRouter.snapshot.params["id"];
    this.serviceService.createKandidat(formData).subscribe(res => {
      const user = res.data.id;
      if (res.msg === 'success') {
        this.navigateTo('./uploadimage-pekerjaan/' + user)
        Swal.fire(
          'Success!',
          'Your file has been update.',
          'success',
        )
      } else {
        Swal.fire(
          'Failed!',
          'Your file has been create.',
          'error',
        )
      }
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
