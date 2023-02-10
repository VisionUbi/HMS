import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBirthCertificateComponent } from './edit-birth-certificate.component';

describe('EditBirthCertificateComponent', () => {
  let component: EditBirthCertificateComponent;
  let fixture: ComponentFixture<EditBirthCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBirthCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBirthCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
