import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBlockComponent } from './carousel-block.component';

describe('CarouselBlockComponent', () => {
  let component: CarouselBlockComponent;
  let fixture: ComponentFixture<CarouselBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
