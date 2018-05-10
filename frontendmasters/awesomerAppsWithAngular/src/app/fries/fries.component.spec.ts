import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriesComponent } from './fries.component';

describe('FriesComponent', () => {
  let component: FriesComponent;
  let fixture: ComponentFixture<FriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be true', () => {
    expect(false).toBeTruthy();
  });
});
