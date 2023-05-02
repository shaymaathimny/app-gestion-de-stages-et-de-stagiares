import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrecruteurComponent } from './modifrecruteur.component';

describe('ModifrecruteurComponent', () => {
  let component: ModifrecruteurComponent;
  let fixture: ComponentFixture<ModifrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifrecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
