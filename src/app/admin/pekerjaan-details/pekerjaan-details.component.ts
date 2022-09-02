import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Pekerjaan } from '../model/pekerjaan';

@Component({
  selector: 'app-pekerjaan-details',
  templateUrl: './pekerjaan-details.component.html',
  styleUrls: ['./pekerjaan-details.component.css']
})
export class PekerjaanDetailsComponent implements OnInit {
  pekerjaanDetails: any;

  constructor(private apiService: ApiservicesService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let pekerjaanId = '';
    if (this.activatedRouter.snapshot.params['id']) {
      pekerjaanId = this.activatedRouter.snapshot.params['id'];
      if (pekerjaanId !== '') {
        this.loadPekerjaanDetails(pekerjaanId);
      }
    }
  }

  loadPekerjaanDetails(pekerjaanId: any) {
    this.apiService.loadPekerjaanInfo(pekerjaanId).subscribe(res => {
      this.pekerjaanDetails = res
    })
  }

}
