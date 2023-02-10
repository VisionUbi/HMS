import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBirthCertificateComponent } from './delete-birth-certificate.component';

describe('DeleteBirthCertificateComponent', () => {
  let component: DeleteBirthCertificateComponent;
  let fixture: ComponentFixture<DeleteBirthCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBirthCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBirthCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
