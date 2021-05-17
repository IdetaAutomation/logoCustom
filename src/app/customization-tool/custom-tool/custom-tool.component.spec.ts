import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularColorfulModule } from 'angular-colorful';
import { CoreModule } from 'src/app/core/core.module';
import { LOGO } from 'src/app/enum/logo.enum';
import { RgbaColor } from 'angular-colorful';

import { CustomToolComponent } from './custom-tool.component';

describe('CustomToolComponent', () => {
  let component: CustomToolComponent;
  let fixture: ComponentFixture<CustomToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        CustomToolComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterViewInit', () => {
    it('should call init methods', () => {
      const changeColorLettersSpy = spyOn(component, 'changeColorLetters').and.callThrough();
      const changeLogoColorSpy = spyOn(component, 'changeLogoColor').and.callThrough();
      const changeVisibilityLogoSpy = spyOn(component, 'changeVisibilityLogo').and.callThrough();
      const changeColorBgSpy = spyOn(component, 'changeColorBg').and.callThrough();

      component.ngAfterViewInit();
      expect(changeColorLettersSpy).toHaveBeenCalledWith(component.colorLetters);
      expect(changeLogoColorSpy).toHaveBeenCalledWith(component.colorLogo);
      expect(changeVisibilityLogoSpy).toHaveBeenCalled();
      expect(changeColorBgSpy).toHaveBeenCalledWith(component.colorBg);
    });
  });

  describe('#ngOnChanges', () => {
    it('should call changeLogo', () => {
      const changeLogoSpy = spyOn(component, 'changeLogo').and.callThrough();

      component.logo = LOGO.LOGO_3;
      component.ngOnChanges({
        logo: new SimpleChange(LOGO.LOGO_1, LOGO.LOGO_3, false)
      });

      expect(changeLogoSpy).toHaveBeenCalledWith(component.logo);
    });

    it('should call changeVisibilityLogo', () => {
      const changeVisibilityLogoSpy = spyOn(component, 'changeVisibilityLogo').and.callThrough();


      component.ngOnChanges({
        hideLogo: new SimpleChange(false, true, false)
      });

      expect(changeVisibilityLogoSpy).toHaveBeenCalled();
    });

    it('should call changeColorLetters', () => {
      const changeColorLettersSpy = spyOn(component, 'changeColorLetters').and.callThrough();

      component.colorLetters = 'white';
      component.ngOnChanges({
        colorLetters: new SimpleChange('black', 'white', false)
      });

      expect(changeColorLettersSpy).toHaveBeenCalledWith(component.colorLetters);
    });

    it('should call changeLogoColor', () => {
      const changeLogoColorSpy = spyOn(component, 'changeLogoColor').and.callThrough();

      component.colorLogo = 'white';
      component.ngOnChanges({
        colorLogo: new SimpleChange('black', 'white', false)
      });

      expect(changeLogoColorSpy).toHaveBeenCalledWith(component.colorLogo);
    });

    it('should call changeLogoColor', () => {
      const changeColorBgSpy = spyOn(component, 'changeColorBg').and.callThrough();

      component.colorBg = 'white';
      component.ngOnChanges({
        colorBg: new SimpleChange('black', 'white', false)
      });

      expect(changeColorBgSpy).toHaveBeenCalledWith(component.colorBg);
    });


  });

  describe('#sliderLogoChanged', () => {
    it('should call set attr transform', () => {
      const getSvgSpy = spyOn(component, 'getSvg').and.callThrough();
      component.sliderLogoChanged({ x: 20, y: 25 });
      expect(getSvgSpy).toHaveBeenCalled();
      expect(component.getSvg().select('#logos').attr('transform')).toEqual('translate(20,25)');
    });
  });

  describe('#sliderTextChanged', () => {
    it('should call set attr transform', () => {
      const getSvgSpy = spyOn(component, 'getSvg').and.callThrough();
      component.sliderTextChanged({ x: 30, y: 35 });
      expect(getSvgSpy).toHaveBeenCalled();
      expect(component.getSvg().select('#letters').attr('transform')).toEqual('translate(30,35)');
    });
  });

  describe('#colorLogoChanged', () => {
    it('should call changeLogoColor & rgbaToHex', () => {
      const changeLogoColorSpy = spyOn(component, 'changeLogoColor').and.callThrough();
      const rgbaToHexSpy = spyOn<any>(component, 'rgbaToHex').and.callThrough();

      const rgbaColor: RgbaColor = { r: 10, g: 20, b: 30, a: 0 };
      component.colorLogoChanged(rgbaColor);


      expect(changeLogoColorSpy).toHaveBeenCalled();
      expect(rgbaToHexSpy).toHaveBeenCalledWith(rgbaColor);
    });
  });

  describe('#colorBgChanged', () => {
    it('should call changeColorBg & rgbaToHex', () => {
      const changeColorBgSpy = spyOn(component, 'changeColorBg').and.callThrough();
      const rgbaToHexSpy = spyOn<any>(component, 'rgbaToHex').and.callThrough();

      const rgbaColor: RgbaColor = { r: 10, g: 20, b: 30, a: 0 };
      component.colorBgChanged(rgbaColor);


      expect(changeColorBgSpy).toHaveBeenCalled();
      expect(rgbaToHexSpy).toHaveBeenCalledWith(rgbaColor);
    });
  });

  describe('#hideLogoToolChanged', () => {
    it('should call changeVisibilityLogo & set hideLogo', () => {
      const changeVisibilityLogoSpy = spyOn(component, 'changeVisibilityLogo').and.callThrough();

      component.hideLogo = false;
      component.hideLogoToolChanged(true);

      expect(changeVisibilityLogoSpy).toHaveBeenCalled();
      expect(component.hideLogo).toEqual(true);
    });
  });


  describe('#hideTextToolChanged', () => {
    it('should call changeVisibilityLogo & set hideLogo', () => {
      const changeVisibilityTextSpy = spyOn<any>(component, 'changeVisibilityText').and.callThrough();

      component.setHideLetters(false);
      component.hideTextToolChanged(true);

      expect(changeVisibilityTextSpy).toHaveBeenCalled();
      expect(component.getHideLetters()).toEqual(true);
    });
  });

  describe('#changeColorLetters', () => {
    it('should call getLettersPaths & set fill', () => {
      component.colorLetters = 'grey';

      component.changeColorLetters('green');

      expect(component.colorLetters).toEqual('green');
      expect(component.getSvg().select('#letters').select('path').attr('fill')).toEqual('#01A0C6');

    });
  });

  describe('#changeLogoColor', () => {
    it('should call getLogoPaths & set fill', () => {
      component.colorLogo = 'grey';

      component.changeLogoColor('green');

      expect(component.colorLogo).toEqual('green');
      expect(component.getSvg().select(`#${component.logo}`).select('path').style('fill')).toEqual('green');

    });
  });

  describe('#changeColorBg', () => {
    it('should call getLogoPaths & set fill', () => {
      component.colorBg = 'grey';

      const color = 'green';
      component.changeColorBg('green');

      expect(component.colorBg).toEqual(color);
      expect(component.getSvg().select('#Artboard').select('use').style('fill')).toEqual(color);

    });
  });

  describe('#setHideLetters', () => {
    it('should set HideLetters', () => {
      component.setHideLetters(true);
      expect(component.getHideLetters()).toEqual(true);

      component.setHideLetters(false);
      expect(component.getHideLetters()).toEqual(false);

    });
  });





});
