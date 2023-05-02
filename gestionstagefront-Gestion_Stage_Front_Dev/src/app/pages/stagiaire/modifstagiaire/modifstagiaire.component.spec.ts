import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifstagiaireComponent } from './modifstagiaire.component';

describe('ModifstagiaireComponent', () => {
  let component: ModifstagiaireComponent;
  let fixture: ComponentFixture<ModifstagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifstagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
