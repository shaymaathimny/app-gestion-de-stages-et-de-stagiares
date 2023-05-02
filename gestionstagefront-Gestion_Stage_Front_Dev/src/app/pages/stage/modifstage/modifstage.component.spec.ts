import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifstageComponent } from './modifstage.component';

describe('ModifstageComponent', () => {
  let component: ModifstageComponent;
  let fixture: ComponentFixture<ModifstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
