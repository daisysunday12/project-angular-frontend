import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-pekerjaan',
  templateUrl: './pekerjaan.component.html',
  styleUrls: ['./pekerjaan.component.css']
})
export class PekerjaanComponent implements OnInit {
  pekerjaan: any
  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
    this.getPekerjaan()
  }
  getPekerjaan() {
    this.serviceService.getPekerjaan().subscribe(res => {
      this.pekerjaan = res
    })
  }
}
