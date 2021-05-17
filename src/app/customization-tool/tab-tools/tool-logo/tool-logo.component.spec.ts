import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolLogoComponent } from './tool-logo.component';

describe('ToolLogoComponent', () => {
  let component: ToolLogoComponent;
  let fixture: ComponentFixture<ToolLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
