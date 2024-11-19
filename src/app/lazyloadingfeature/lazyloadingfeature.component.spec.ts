import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingfeatureComponent } from './lazyloadingfeature.component';

describe('LazyloadingfeatureComponent', () => {
  let component: LazyloadingfeatureComponent;
  let fixture: ComponentFixture<LazyloadingfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyloadingfeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadingfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
