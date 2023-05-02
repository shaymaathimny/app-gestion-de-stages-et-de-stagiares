import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrecruteurComponent } from './ajoutrecruteur.component';

describe('AjoutrecruteurComponent', () => {
  let component: AjoutrecruteurComponent;
  let fixture: ComponentFixture<AjoutrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
