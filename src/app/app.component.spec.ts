import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomizationToolModule } from './customization-tool/customization-tool.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule,
        CustomizationToolModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('#saveSvgasPng', () => {

    it('should call method saveSvgasPng()', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const saveSvgasPngSpy = spyOn(app, 'saveSvgasPng').and.callThrough();
      app.saveSvgasPng();
      expect(saveSvgasPngSpy).toHaveBeenCalled();
    });
  });


  describe('#saveSvg', () => {
    it('should return false', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const resu = app.saveSvg();
      expect(resu).toBeFalsy();
    });
  });

});
