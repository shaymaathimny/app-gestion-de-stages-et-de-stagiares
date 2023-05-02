import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListencadreurComponent } from './listencadreur.component';

describe('ListencadreurComponent', () => {
  let component: ListencadreurComponent;
  let fixture: ComponentFixture<ListencadreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListencadreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListencadreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
