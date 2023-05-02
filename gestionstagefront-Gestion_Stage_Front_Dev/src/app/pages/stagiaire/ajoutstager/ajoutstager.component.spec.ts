import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutstagerComponent } from './ajoutstager.component';

describe('AjoutstagerComponent', () => {
  let component: AjoutstagerComponent;
  let fixture: ComponentFixture<AjoutstagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutstagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutstagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
