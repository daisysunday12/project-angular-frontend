import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-kandidat',
  templateUrl: './kandidat.component.html',
  styleUrls: ['./kandidat.component.css']
})
export class KandidatComponent implements OnInit {
  kandidatListSubscribe: any;
  kandidatList: any;
  kandidatDetails: any;

  constructor(private apiService: ApiservicesService, private router: Router) { }

  ngOnInit(): void {
    this.getKandidatList();
  }

  getKandidatList() {
    this.kandidatListSubscribe = this.apiService.loadKandidat().subscribe(res => {
      this.kandidatList = res;
      this.rowData = res;
    })
  }

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };

  columnDefs: ColDef[] = [
    {
      field: 'nama',
      headerName: 'Nama',
      pinned: 'left',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'Pekerjaan.pekerjaan',
      headerName: 'Pekerjaan',
      filter: 'agColumnFilter',
    },
    {
      field: 'tempat',
      headerName: 'Tempat Lahir',
      filter: 'agColumnFilter',
    },
    {
      field: 'tanggallahir',
      headerName: 'Tanggal Lahir',
      filter: 'agDateColumnFilter',
    },
    {
      field: 'jk',
      headerName: 'Jenis Kelamin',
      filter: 'agColumnFilter',
    },

    {
      field: 'prov',
      headerName: 'Provinsi',
      filter: 'agColumnFilter',
    },
    {
      field: 'kab',
      headerName: 'Kabupaten',
      filter: 'agColumnFilter',
    },
    {
      field: 'kewarganegaraan',
      headerName: 'Kewarganegaraan',
      filter: 'agColumnFilter',
    },
    {
      field: 'notelp',
      filter: 'agColumnFilter',
      headerName: 'No Telp',
    },
    {
      filter: 'agColumnFilter',
      field: 'pendidikan',
      headerName: 'pendidikan',
    },
    {
      filter: 'agColumnFilter',
      field: 'jurusan',
      headerName: 'jurusan',
    },
    {
      filter: 'agColumnFilter',
      field: 'salary',
      headerName: 'Salary',
    },
  ];
  rowData: any = [];

  loadKandidatDetails(param: any) {
    this.apiService.loadKandidatDetails(param).subscribe(res => {
      this.kandidatDetails = res
    })
  }

  deletePekerjaan(param: any) {
    const that = this;
    Swal.fire({
      title: 'Are You Sure?',
      text: "You won't be able to revert this!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        that.apiService.deleteKandidat(param).subscribe(res => {
          if (res.msg === 'data berhasil dihapus') {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success',
            )
            $("#myModal").modal("hide");
            this.getKandidatList();
          } else {
            Swal.fire(
              'Failed!',
              'Your file has been failed to delete.',
              'error',
            )
            this.getKandidatList();
          }
        })
      }
    })
  }

  onRowClicked(event: any) {
    $("#printbiodata").attr("href", "/admin/preview-kandidat/" + event.data.id);
    $("#printfile").attr("href", "localhost:3000/public/uploads/data-kandidat/file/" + event.data.file);
    $("#image").attr("src", "http://localhost:3000/uploads/data-kandidat/img/" + event.data.image);
    $("btn-danger").attr("onClick", "http://localhost:3000/uploads/data-kandidat/img/" + event.data.image);
    $("#nama").text(event.data.nama);
    $("#tempat").text(event.data.tempat);
    $("#tanggallahir").text(event.data.tanggallahir);
    $("#jk").text(event.data.jk);
    $("#pekerjaan").text(event.data.Pekerjaan.pekerjaan);
    $("#pendidikan").text(event.data.pendidikan);
    $("#jurusan").text(event.data.jurusan);
    $("#salary").text(event.data.salary);
    $("#prov").text(event.data.prov);
    $("#kab").text(event.data.kab);
    $("#kewarganegaraan").text(event.data.kewarganegaraan);
    $("#notelp").text(event.data.notelp);
    $("#myModal").modal("show");
    $('#tampilModalUbah').on('click', () => {
      const id = event.data.id
      this.deletePekerjaan(id)
    });
  }
}
