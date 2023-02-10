import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirthCertificateComponent } from './add-birth-certificate.component';

describe('AddBirthCertificateComponent', () => {
  let component: AddBirthCertificateComponent;
  let fixture: ComponentFixture<AddBirthCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBirthCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBirthCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
