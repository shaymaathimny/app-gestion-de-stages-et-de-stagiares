import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstageComponent } from './detailstage.component';

describe('DetailstageComponent', () => {
  let component: DetailstageComponent;
  let fixture: ComponentFixture<DetailstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
