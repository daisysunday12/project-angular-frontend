import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pekerjaan: any
  constructor(private serviceService: ServicesService, private router: Router) { }

  ngOnInit(): void {
    AOS.init();
    this.getPekerjaan()
  }

  getPekerjaan() {
    this.serviceService.getPekerjaan().subscribe(res => {
      this.pekerjaan = res
    })
  }

}
