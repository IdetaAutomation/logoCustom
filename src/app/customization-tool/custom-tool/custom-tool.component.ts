import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RgbaColor } from 'angular-colorful';
import * as d3 from 'd3';
import { LOGO } from 'src/app/enum/logo.enum';
import { Position } from 'src/app/model/models';



@Component({
  selector: 'app-custom-tool',
  templateUrl: './custom-tool.component.html',
  styleUrls: ['./custom-tool.component.scss']
})
export class CustomToolComponent implements OnChanges, AfterViewInit {

  @Input() hideLogo = false;
  @Input() colorLetters: string = 'black';
  @Input() colorLogo: string = 'black';
  @Input() colorBg: string = 'white';
  @Input() logo: LOGO = LOGO.LOGO_1;

  public id = "svgIdeta"
  private hideLetters = false;

  ngAfterViewInit(): void {
    this.changeColorLetters(this.colorLetters);
    this.changeLogoColor(this.colorLogo);
    this.changeVisibilityLogo();
    this.changeColorBg(this.colorBg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.logo && !changes.logo.isFirstChange()) {
        this.changeLogo(this.logo);
      }
      if (changes.hideLogo && !changes.hideLogo.isFirstChange()) {
        this.changeVisibilityLogo();
      }
      if (changes.colorLetters && !changes.colorLetters.isFirstChange()) {
        this.changeColorLetters(this.colorLetters);
      }
      if (changes.colorLogo && !changes.colorLogo.isFirstChange()) {
        this.changeLogoColor(this.colorLogo);
      }
      if (changes.colorBg && !changes.colorBg.isFirstChange()) {
        this.changeColorBg(this.colorBg);
      }
    }
  }

  public sliderLogoChanged(positon: Position): void {
    this.getSvg().select('#logos').attr("transform", `translate(${positon.x},${positon.y})`);
  }

  public sliderTextChanged(positon: Position): void {
    this.getSvg().select('#letters').attr("transform", `translate(${positon.x},${positon.y})`);
  }

  public colorLogoChanged(event: RgbaColor): void {
    this.changeLogoColor(this.rgbaToHex(event));
  }

  public colorTextChanged(event: RgbaColor): void {
    this.changeColorLetters(this.rgbaToHex(event));
  }

  public colorBgChanged(event: RgbaColor): void {
    this.changeColorBg(this.rgbaToHex(event));
  }

  private rgbaToHex(rgba: RgbaColor): string {
    return '#' + this.fullColorHex(rgba.r, rgba.g, rgba.b);
  }

  private fullColorHex(r: number, g: number, b: number): string {
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return red + green + blue;
  };

  private rgbToHex(rgb: number): string {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  public hideLogoToolChanged(event: boolean): void {
    this.hideLogo = event;
    this.changeVisibilityLogo();
  }

  public hideTextToolChanged(event: boolean): void {
    this.hideLetters = event;
    this.changeVisibilityText();
  }

  public hideBgToolChanged(event: boolean): void {
    this.changeColorBg(event ? 'none' : this.colorBg);
  }

  public logoToolChanged(event: LOGO): void {
    this.logo = event;
    this.changeLogo(this.logo);
  }

  public changeLogo(logo: LOGO): void {
    if (this.logo !== logo) {
      this.logo = logo;
    }

    const logo1Group = this.getLogoGroupById(LOGO.LOGO_1);
    const logo2Group = this.getLogoGroupById(LOGO.LOGO_2);
    const logo3Group = this.getLogoGroupById(LOGO.LOGO_3);

    switch (logo) {
      case LOGO.LOGO_1:
        logo2Group ? logo2Group.style('visibility', 'hidden') : undefined;
        logo3Group ? logo3Group.style('visibility', 'hidden') : undefined;
        break;

      case LOGO.LOGO_2:
        logo1Group ? logo1Group.style('visibility', 'hidden') : undefined;
        logo3Group ? logo3Group.style('visibility', 'hidden') : undefined;
        break;

      case LOGO.LOGO_3:
        logo1Group ? logo1Group.style('visibility', 'hidden') : undefined;
        logo2Group ? logo2Group.style('visibility', 'hidden') : undefined;
        break;
    }

    this.changeLogoColor(this.colorLogo);
    this.changeVisibilityLogo();
  }

  public changeVisibilityLogo(): void {
    this.getCurrentLogoGroup().style('visibility', this.hideLogo ? 'hidden' : 'visible');
  }

  private changeVisibilityText(): void {
    this.getLettersGroup().style('visibility', this.hideLetters ? 'hidden' : 'visible');
  }

  public changeColorLetters(color: string) {
    if (this.colorLetters !== color && color != '') {
      this.colorLetters = color;
    }

    const lettersPaths = this.getLettersPaths();

    lettersPaths.each(function (e, i) {
      d3.select(this).style('fill', color);
    });
  }

  public changeLogoColor(color: string): void {
    if (this.colorLogo != color) {
      this.colorLogo = color;
    }
    const logoPaths = this.getLogoPaths();

    logoPaths.each(function (e, i) {
      d3.select(this).style('fill', color);
    });
  }

  public changeColorBg(color: string): void {
    if (this.colorBg !== color && color !== '' && color !== 'none') {
      this.colorBg = color;
    }

    this.getSvg().select('#Artboard').select('use').style('fill', color);
  }

  public getSvg() {
    return d3.select(`#${this.id}`);
  }

  private getLettersGroup() {
    return this.getSvg().select('#letters');
  }

  private getLettersPaths() {
    return this.getLettersGroup().selectAll('path');
  }

  private getCurrentLogoGroup() {
    return this.getSvg().select(`#${this.logo}`);
  }

  private getLogoGroupById(logoId: LOGO) {
    return this.getSvg().select(`#${logoId}`);
  }

  private getLogoPaths() {
    return this.getCurrentLogoGroup().selectAll('path');
  }


  public setHideLetters(hideLetters : boolean){
    this.hideLetters = hideLetters;
  }

  public getHideLetters(){
    return this.hideLetters;
  }

}
