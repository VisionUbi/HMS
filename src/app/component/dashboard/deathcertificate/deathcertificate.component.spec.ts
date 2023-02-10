import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathcertificateComponent } from './deathcertificate.component';

describe('DeathcertificateComponent', () => {
  let component: DeathcertificateComponent;
  let fixture: ComponentFixture<DeathcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
