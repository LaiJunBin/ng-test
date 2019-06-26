import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NolazyComponent } from './nolazy.component';

describe('NolazyComponent', () => {
  let component: NolazyComponent;
  let fixture: ComponentFixture<NolazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NolazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NolazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
