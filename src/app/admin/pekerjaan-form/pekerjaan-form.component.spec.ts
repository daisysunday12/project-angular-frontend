import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekerjaanFormComponent } from './pekerjaan-form.component';

describe('PekerjaanFormComponent', () => {
  let component: PekerjaanFormComponent;
  let fixture: ComponentFixture<PekerjaanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PekerjaanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PekerjaanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
