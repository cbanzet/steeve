import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneConnexionDialogComponent } from './phone-connexion-dialog.component';

describe('PhoneConnexionDialogComponent', () => {
  let component: PhoneConnexionDialogComponent;
  let fixture: ComponentFixture<PhoneConnexionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneConnexionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneConnexionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
