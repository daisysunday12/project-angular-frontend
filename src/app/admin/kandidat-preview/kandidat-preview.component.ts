import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';

@Component({
  selector: 'app-kandidat-preview',
  templateUrl: './kandidat-preview.component.html',
  styleUrls: ['./kandidat-preview.component.css']
})
export class KandidatPreviewComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiservicesService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = '';
    if (this.activatedRouter.snapshot.params['id']) {
      id = this.activatedRouter.snapshot.params['id'];
      if (id !== '') {
        this.loadKandidatDetails(id);
      }
    }
  }
  loadKandidatDetails(id: any) {
    this.apiService.loadKandidatDetails(id).subscribe(res => {
      this.data = res
    })
  }
  print() {
    window.print()
  }
}
