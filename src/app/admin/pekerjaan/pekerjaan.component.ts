import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pekerjaan',
  templateUrl: './pekerjaan.component.html',
  styleUrls: ['./pekerjaan.component.css']
})
export class PekerjaanComponent implements OnInit {

  constructor(private apiserviceService: ApiservicesService, private router: Router) { }

  ngOnInit(): void {
    this.getPekerjaanList()
  }

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };

  columnDefs: ColDef[] = [
    {
      field: 'pekerjaan',
      headerName: 'Pekerjaan',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'deskripsiPekerjaan',
      headerName: 'Deskripsi Pekerjaan',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'status',
      headerName: 'Status',
      filter: 'agColumnFilter',
    },
    {
      field: 'createdAt',
      headerName: 'Tanggal Dibuat',
      filter: 'agDateColumnFilter',
    },
    {
      field: '',
      headerName: 'Action',
      width: 450,
      cellRenderer: this.actionRender.bind(this)
    },
  ];

  actionRender(param: any) {
    let div = document.createElement('div');
    let htmlCode = '<button type="button" class="btn btn-sm btn-primary"><i class="fa-solid fa-upload"></i></button> \n' + '<button type="button" class="btn btn-sm btn-success"><i class="fa-solid fa-eye"></i></button> \n' + '<button type="button" class="btn btn-sm btn-warning"><i class="fa-solid fa-pen"></i></button> \n' + '<button type="button" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>';
    div.innerHTML = htmlCode;
    // handle view button
    let viewButton = div.querySelector('.btn-success')
    // @ts-ignore
    viewButton.addEventListener('click', () => {
      this.viewPekerjaanDetails(param)
    })

    // handle view edit
    let editButton = div.querySelector('.btn-warning')
    // @ts-ignore
    editButton.addEventListener('click', () => {
      this.editPekerjaanDetails(param)
    })

    // handle view delete
    let deleteButton = div.querySelector('.btn-danger')
    // @ts-ignore
    deleteButton.addEventListener('click', () => {
      this.deletePekerjaan(param)
    })

    // handle view upload file
    let uploadButton = div.querySelector('.btn-primary')
    // @ts-ignore
    uploadButton.addEventListener('click', () => {
      this.uploadFile(param)
    })
    return div;
  }
  viewPekerjaanDetails(param: any) {
    // console.log('params', param.data._id)
    this.router.navigate(['/crud/pekerjaan-details/' + param.data._id])
  }
  editPekerjaanDetails(param: any) {
    this.router.navigate(['/crud/update-pekerjaan/' + param.data._id])
  }
  deletePekerjaan(param: any) {
    // console.log(param);
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
        that.apiserviceService.deletePekerjaan(param.data._id).subscribe(res => {
          if (res.message === 'Data Berhasil Dihapus') {
            this.getPekerjaanList();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success',
            )
          } else {
            this.getPekerjaanList();
            Swal.fire(
              'Failed!',
              'Your file has been failed to delete.',
              'error',
            )
          }
        })
      }
    })
  }
  // upload file
  uploadFile(param: any) {
    this.router.navigate(['/crud/upload-file/' + param.data._id])
  }

  rowData: any = [];
  pekerjaanList: any

  getPekerjaanList() {
    this.pekerjaanList = this.apiserviceService.getPekerjaan().subscribe(res => {
      this.rowData = res
    })
  }
}