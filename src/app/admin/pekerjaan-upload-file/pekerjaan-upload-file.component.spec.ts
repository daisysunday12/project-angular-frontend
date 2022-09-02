import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekerjaanUploadFileComponent } from './pekerjaan-upload-file.component';

describe('PekerjaanUploadFileComponent', () => {
  let component: PekerjaanUploadFileComponent;
  let fixture: ComponentFixture<PekerjaanUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PekerjaanUploadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PekerjaanUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
