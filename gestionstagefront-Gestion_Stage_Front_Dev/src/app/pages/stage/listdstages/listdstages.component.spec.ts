import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdstagesComponent } from './listdstages.component';

describe('ListdstagesComponent', () => {
  let component: ListdstagesComponent;
  let fixture: ComponentFixture<ListdstagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdstagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
