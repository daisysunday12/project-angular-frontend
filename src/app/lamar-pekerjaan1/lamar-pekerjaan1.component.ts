import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lamar-pekerjaan1',
  templateUrl: './lamar-pekerjaan1.component.html',
  styleUrls: ['./lamar-pekerjaan1.component.css']
})
export class LamarPekerjaan1Component implements OnInit {
  pekerjaanDetails: any;
  kandidatForm: any;
  selectedFile: any;

  constructor(private serviceService: ServicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createKandidatForm();
    const Id = this.activatedRouter.snapshot.params['id'];
    this.actionRender(Id);
  }
  actionRender(params: any) {
    this.serviceService.getPekerjaanKandidat(params).subscribe(res => {
      this.pekerjaanDetails = res;
      console.log(res)
    })
  }

  createKandidatForm() {
    this.kandidatForm = this.formBuilder.group({
      'image': ['', Validators.compose([Validators.required])],
    })
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]
      // console.log(this.selectedFile)
    }
  }
  uploadFile() {
    let id = '';
    if (this.activatedRouter.snapshot.params['id']) {
      id = this.activatedRouter.snapshot.params['id'];
    }
    const uploadData = new FormData;
    // console.log("data image", this.selectedFile);
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.serviceService.uploadImageKandidat(this.activatedRouter.snapshot.params['id'], uploadData).subscribe(res => {
      if (res.msg === 'success') {
        this.navigateTo('/uploadfile-pekerjaan/' + id)
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
    Swal.fire(
      'Failed!',
      'Your file has been error.',
      'error',
    )
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
