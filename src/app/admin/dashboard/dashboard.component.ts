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


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartDiagram: ApexNonAxisChartSeries = [40, 32]
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
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
    text: "Product Trends by Month",
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
  }

  result: any;
  pekerjaan: any
  getPekerjaanList() {
    this.crudService.getPekerjaan().subscribe((res) => {
      console.log(res);
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
