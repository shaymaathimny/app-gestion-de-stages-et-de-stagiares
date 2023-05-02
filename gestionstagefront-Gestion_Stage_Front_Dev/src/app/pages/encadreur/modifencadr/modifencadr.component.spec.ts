import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifencadrComponent } from './modifencadr.component';

describe('ModifencadrComponent', () => {
  let component: ModifencadrComponent;
  let fixture: ComponentFixture<ModifencadrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifencadrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifencadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
