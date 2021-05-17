import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBackgroundComponent } from './tool-background.component';

describe('ToolBackgroundComponent', () => {
  let component: ToolBackgroundComponent;
  let fixture: ComponentFixture<ToolBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
