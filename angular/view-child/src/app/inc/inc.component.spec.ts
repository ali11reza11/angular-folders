import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncComponent } from './inc.component';

describe('IncComponent', () => {
  let component: IncComponent;
  let fixture: ComponentFixture<IncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncComponent]
    });
    fixture = TestBed.createComponent(IncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
