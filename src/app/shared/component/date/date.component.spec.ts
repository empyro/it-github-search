import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DateComponent } from './date.component';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  const arrangeTest = (date) => {
    // Arrange
    component.date = date;

    // Act
    component.ngOnChanges();
    fixture.detectChanges();

    return fixture.debugElement.query(By.css('span')).nativeElement;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work as expected', () => {
    // Arrange + Act
    const $span = arrangeTest('2021-02-06T09:11:17.467Z');

    // Assert
    expect($span.title.length > 0).toBeTruthy();
    expect($span.textContent).toBe('Saturday, February 6th 2021, 10:11:17 am');
  });

  it('should not work without data', () => {
    // Arrange + Act
    const $span = arrangeTest(undefined);

    // Assert
    expect($span.title).toBe('');
    expect($span.textContent).toBe('');
  });

  it('should not work with invalid date', () => {
    // Arrange + Act
    const $span = arrangeTest('2021-13-06T09:11:17.467Z');

    // Assert
    expect($span.title).toBe('');
    expect($span.textContent).toBe('');
  });
});
