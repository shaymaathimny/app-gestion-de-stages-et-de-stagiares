import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstagiaireComponent } from './detailstagiaire.component';

describe('DetailstagiaireComponent', () => {
  let component: DetailstagiaireComponent;
  let fixture: ComponentFixture<DetailstagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
