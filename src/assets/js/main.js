var request = {
  method: "GET",
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
};
const res = fetch("http://localhost:3000/api/v1/kandidat", request)
  .then((response) => response.json())
  .then((data) => {
    let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    data.forEach((el) => {
      if (el.bulan == 'jan' && el.jk == 'L') a[0] = a[0] + 1
      if (el.bulan == 'feb' && el.jk == 'L') a[1] += 1
      if (el.bulan == 'mar' && el.jk == 'L') a[2] += 1
      if (el.bulan == 'apr' && el.jk == 'L') a[3] += 1
      if (el.bulan == 'may' && el.jk == 'L') a[4] += 1
      if (el.bulan == 'jun' && el.jk == 'L') a[5] += 1
      if (el.bulan == 'jul' && el.jk == 'L') a[6] += 1
      if (el.bulan == 'aug' && el.jk == 'L') a[7] += 1
      if (el.bulan == 'sep' && el.jk == 'L') a[8] += 1
      if (el.bulan == 'oct' && el.jk == 'L') a[9] += 1
      if (el.bulan == 'nov' && el.jk == 'L') a[10] += 1
      if (el.bulan == 'dec' && el.jk == 'L') a[11] += 1
      if (el.bulan == 'jan' && el.jk == 'P') b[0] = b[0] + 1
      if (el.bulan == 'feb' && el.jk == 'P') b[1] += 1
      if (el.bulan == 'mar' && el.jk == 'P') b[2] += 1
      if (el.bulan == 'apr' && el.jk == 'P') b[3] += 1
      if (el.bulan == 'may' && el.jk == 'P') b[4] += 1
      if (el.bulan == 'jun' && el.jk == 'P') b[5] += 1
      if (el.bulan == 'jul' && el.jk == 'P') b[6] += 1
      if (el.bulan == 'aug' && el.jk == 'P') b[7] += 1
      if (el.bulan == 'sep' && el.jk == 'P') b[8] += 1
      if (el.bulan == 'oct' && el.jk == 'P') b[9] += 1
      if (el.bulan == 'nov' && el.jk == 'P') b[10] += 1
      if (el.bulan == 'dec' && el.jk == 'P') b[11] += 1
    });

    // console.log("data A", a);
    // console.log("data B", b);

    var options = {
      series: [{
        name: 'Laki Laki',
        data: a,
      }, {
        name: 'Perempuan',
        data: b
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
      },
      title: {
        text: 'Jumlah Kandidat Berdasarkan Bulan',
        align: 'left'
      },
    };

    var chart = new ApexCharts(document.querySelector("#reportsChart"), options)
    chart.render();
  }).catch((error) => console.error(error));

const res1 = fetch("http://localhost:3000/api/v1/kandidat", request)
  .then((response) => response.json())
  .then((data) => {
    let a = [0, 0]
    data.forEach((el) => {
      if (el.jk == 'L') a[0] = a[0] + 1
      if (el.jk == 'P') a[1] += 1
    });

    // console.log("data JK A", a);
    var options = {
      series: a,
      chart: {
        width: 380,
        type: 'pie',
      },
      title: {
        text: 'Jumlah Kandidat Berdasarkan Jenis Kelamin',
        align: 'left'
      },
      labels: ['Laki-Laki', 'Perempuan'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    var chart = new ApexCharts(document.querySelector("#reportsChartDiagram"), options)
    chart.render();
  }).catch((error) => console.error(error));




