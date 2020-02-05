import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsandstatisticsComponent } from './reportsandstatistics.component';

describe('ReportsandstatisticsComponent', () => {
  let component: ReportsandstatisticsComponent;
  let fixture: ComponentFixture<ReportsandstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsandstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsandstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
