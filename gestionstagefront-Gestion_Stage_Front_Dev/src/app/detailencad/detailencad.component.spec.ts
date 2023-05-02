import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailencadComponent } from './detailencad.component';

describe('DetailencadComponent', () => {
  let component: DetailencadComponent;
  let fixture: ComponentFixture<DetailencadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailencadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailencadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
