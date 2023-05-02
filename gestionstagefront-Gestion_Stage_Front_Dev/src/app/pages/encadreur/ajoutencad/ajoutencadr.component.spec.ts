import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutencadComponent } from './ajoutencadr.component';

describe('AjoutencadComponent', () => {
  let component: AjoutencadComponent;
  let fixture: ComponentFixture<AjoutencadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutencadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutencadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
