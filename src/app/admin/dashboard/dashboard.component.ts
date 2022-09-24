import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private crudService: ApiservicesService, private router: Router, private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.cekLogin()
    this.getPekerjaanList()

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  result: any;
  pekerjaan: any
  getPekerjaanList() {
    this.crudService.getPekerjaan().subscribe((res) => {
      this.result = res
    });
  }
  cekLogin() {
    this.crudService.loadKandidat().subscribe((res) => {
      return;
    }, err => {
      this.navigateTo('./login')
      Swal.fire(
        'Warning!',
        'Harap Login Terlebih Dahulu',
        'warning',
      )
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
