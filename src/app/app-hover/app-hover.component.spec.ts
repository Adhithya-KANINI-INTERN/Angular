import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHoverComponent } from './app-hover.component';

describe('AppHoverComponent', () => {
  let component: AppHoverComponent;
  let fixture: ComponentFixture<AppHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
