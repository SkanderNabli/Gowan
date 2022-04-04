import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimHomeComponent } from './anim-home.component';

describe('AnimHomeComponent', () => {
  let component: AnimHomeComponent;
  let fixture: ComponentFixture<AnimHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
