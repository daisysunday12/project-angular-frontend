import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekerjaanDetailsComponent } from './pekerjaan-details.component';

describe('PekerjaanDetailsComponent', () => {
  let component: PekerjaanDetailsComponent;
  let fixture: ComponentFixture<PekerjaanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PekerjaanDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PekerjaanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
