import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pekerjaan-upload-file',
  templateUrl: './pekerjaan-upload-file.component.html',
  styleUrls: ['./pekerjaan-upload-file.component.css']
})
export class PekerjaanUploadFileComponent implements OnInit {
  pekerjaanId: any;
  uploadForm: any;
  selectedFile: any;

  constructor(private apiService: ApiservicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createPekerjaanForm();
    let pekerjaanId = '';
    if (this.activatedRouter.snapshot.params['id']) {
      pekerjaanId = this.activatedRouter.snapshot.params['id'];
    }
  }

  createPekerjaanForm() {
    this.uploadForm = this.formBuilder.group(
      {
        'image': ['', Validators.compose([Validators.required])],
      })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    }
  }

  uploadFile() {
    let pekerjaanId = '';
    if (this.activatedRouter.snapshot.params['id']) {
      pekerjaanId = this.activatedRouter.snapshot.params['id'];
    }
    const uploadData = new FormData;
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.apiService.uploadPekerjaan(this.activatedRouter.snapshot.params['id'], uploadData).subscribe(res => {
      if (res.msg === 'success') {
        this.navigateTo('./admin/pekerjaan')
        Swal.fire(
          'Success!',
          'Your file has been update.',
          'success',
        )
      } else {
        this.navigateTo('./admin/pekerjaan');
        Swal.fire(
          'Failed!',
          'Your file has been update.',
          'error',
        )
      }
    })
  }

  logout() {
    Swal.fire({
      title: 'Are You Sure Logout?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success Logout!',
          'Your Logout Success',
          'success',
        )
        // window.location.reload();
        this.navigateTo('./login')
        localStorage.removeItem('appToken')
      }
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }

}
