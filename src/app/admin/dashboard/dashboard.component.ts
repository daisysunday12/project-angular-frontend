import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle, ChartComponent, ApexAxisChartSeries, ApexXAxis, ApexStroke, ApexGrid } from 'ng-apexcharts';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'bar',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Data Pekerjaan dan Jumlah Kandidat',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
  result: any;
  constructor(private router: Router) {
    this.chartOptions = {
      series: [
        {
          name: "Laki-Laki",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Perempuan",
          data: [10, 0, 78, 90, 20, 10, 30, 15, 8]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: 'Data Pekerjaan dan Jumlah Kandidat',
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.result
      }
    };

  }

  ngOnInit(): void {
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
