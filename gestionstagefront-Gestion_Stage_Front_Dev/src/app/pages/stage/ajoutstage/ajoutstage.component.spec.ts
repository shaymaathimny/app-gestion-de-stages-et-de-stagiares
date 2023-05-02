import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutstageComponent } from './ajoutstage.component';

describe('AjoutstageComponent', () => {
  let component: AjoutstageComponent;
  let fixture: ComponentFixture<AjoutstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
