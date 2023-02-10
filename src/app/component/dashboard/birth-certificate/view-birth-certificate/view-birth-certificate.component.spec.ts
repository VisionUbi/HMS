import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBirthCertificateComponent } from './view-birth-certificate.component';

describe('ViewBirthCertificateComponent', () => {
  let component: ViewBirthCertificateComponent;
  let fixture: ComponentFixture<ViewBirthCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBirthCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBirthCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
