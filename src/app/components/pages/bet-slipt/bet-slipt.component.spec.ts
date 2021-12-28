import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSliptComponent } from './bet-slipt.component';

describe('BetSliptComponent', () => {
  let component: BetSliptComponent;
  let fixture: ComponentFixture<BetSliptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSliptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSliptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// app.component.spec.ts
it('should correctly render the passed @Input value', () => {
  component.message = 'Enter a new title'; // 1
  fixture.detectChanges(); // 2
  const compiled = fixture.debugElement.nativeElement; // 2
  expect(compiled.querySelector('p').textContent).toBe('Enter a new title'); // 3
});
});
