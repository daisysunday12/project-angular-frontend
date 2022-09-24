import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

import Swal from 'sweetalert2';
import { ApiservicesService } from '../apiservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { compileClassMetadata } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalLaki: any
  totalPerempuan: any
  data: any

  getTotalPria() {
    let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    this.crudService.getTotalPria().subscribe((res) => {
      a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      console.log('data', res)
      res.rows.forEach((el: any) => {
        if (el.bulan == 'jan') a[0] = a[0] + 1
        if (el.bulan == 'feb') a[1] += 1
        if (el.bulan == 'mar') a[2] += 1
        if (el.bulan == 'apr') a[3] += 1
        if (el.bulan == 'may') a[4] += 1
        if (el.bulan == 'jun') a[5] += 1
        if (el.bulan == 'jul') a[6] += 1
        if (el.bulan == 'aug') a[7] += 1
        if (el.bulan == 'sep') a[8] += 1
        if (el.bulan == 'oct') a[9] += 1
        if (el.bulan == 'nov') a[10] += 1
        if (el.bulan == 'dec') a[11] += 1
      });
      console.log('Res Data', a)
    });

    console.log('Res Data AKHIR', a)
    return a
  }
  getTotalWanita() {
    this.crudService.getTotalWanita().subscribe((res) => {
      this.totalPerempuan = res.rows
    });
  }
  chartDiagram: ApexNonAxisChartSeries = [50, 20];
  chartDetailsDiagram: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  }
  titleLingkaran: ApexTitleSubtitle = {
    text: "Kandidat Berdasarkan Jenis Kelamin",
    align: "left"
  }
  label = ["Laki-Laki", "Perempuan"]

  chartSeries: ApexAxisChartSeries = [
    {
      name: "Laki-Laki",
      data: this.getTotalPria()
      // data: [10, 41, 35, 51, 49, 62, 50, 60, 50]
    },
    {
      name: "Perempuan",
      // data: this.totalPerempuan
      data: [5, 10, 15, 20, 0, 10, 25, 40, 30]
    }
  ]
  chartDetails: ApexChart = {
    height: 350,
    type: "line",
    zoom: {
      enabled: false
    }
  }
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  stroke: ApexStroke = {
    curve: "straight"
  }
  title: ApexTitleSubtitle = {
    text: "Kandidat Berdasarkan Bulan",
    align: "left"
  }
  grid: ApexGrid = {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5
    }
  }
  xaxis: ApexXAxis = {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ]
  }

  constructor(private crudService: ApiservicesService, private router: Router) {
  }

  ngOnInit(): void {
    this.cekLogin()
    this.getPekerjaanList()
    this.getTotalPria()
    this.getTotalWanita()
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
