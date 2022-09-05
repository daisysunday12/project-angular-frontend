import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lamar-pekerjaan2',
  templateUrl: './lamar-pekerjaan2.component.html',
  styleUrls: ['./lamar-pekerjaan2.component.css']
})
export class LamarPekerjaan2Component implements OnInit {
  pekerjaanDetails: any;
  selectedFile: any;

  constructor(private serviceService: ServicesService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const Id = this.activatedRouter.snapshot.params['id'];
    this.actionRender(Id);
  }

  actionRender(params: any) {
    this.serviceService.getPekerjaanKandidat(params).subscribe(res => {
      console.log(res);
      this.pekerjaanDetails = res;
    })
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]
    }
  }
  uploadFile() {
    let id = '';
    if (this.activatedRouter.snapshot.params['id']) {
      id = this.activatedRouter.snapshot.params['id'];
    }
    const uploadData = new FormData;
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.serviceService.uploadFileKandidat(this.activatedRouter.snapshot.params['id'], uploadData).subscribe(res => {
      if (res.msg === 'success') {
        this.navigateTo('/success')
      } else {
        Swal.fire(
          'Failed!',
          'Your file has been update.',
          'error',
        )
      }
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
