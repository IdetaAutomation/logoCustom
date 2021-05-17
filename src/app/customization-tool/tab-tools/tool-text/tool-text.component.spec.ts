import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTextComponent } from './tool-text.component';

describe('ToolTextComponent', () => {
  let component: ToolTextComponent;
  let fixture: ComponentFixture<ToolTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
