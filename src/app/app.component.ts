import { Component } from '@angular/core';
import { LOGO } from './enum/logo.enum';
const svg = require('save-svg-as-png');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  /**
   * Hide logo status
   */
  public hideLogo = false;

  /**
   * Color of letters of svg
   */
  public colorLetters: string = 'black';

  /**
   * Color of logo of svg
   */
  public colorLogo: string = 'black';

  /**
   * Color of background of svg
   */
  public colorBg: string = 'white';

  /**
   * Current logo
   */
  public logo: LOGO = LOGO.LOGO_1;


  /**
   * List of images of the carousel
   */
  public carouselImgs: { 'path': string }[] = [
    { path: './assets/images/carousel/lc1.png' },
    { path: './assets/images/carousel/lc2.png' },
    { path: './assets/images/carousel/lc3.png' },
    { path: './assets/images/carousel/lc4.png' },
    { path: './assets/images/carousel/lc5.png' },
    { path: './assets/images/carousel/lc6.png' },
    { path: './assets/images/carousel/lc7.png' },
    { path: './assets/images/carousel/lc8.png' },
  ];


  /**
   * Download SVG as PNG
   */
  public saveSvgasPng(): void {
    svg.saveSvgAsPng(document.getElementById("svgIdeta"), "logoCustomized.png");
  }


  /**
   * Download SVG
   * @returns true is downloaded , false not download 
   */
  public saveSvg() : boolean {
    const svgEl = document.getElementById('svgIdeta');
    if (svgEl) {
      svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const svgData = svgEl.outerHTML;
      const preface = '<?xml version="1.0" standalone="no"?>\r\n';
      const svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = 'logoCustomized';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      return true;
    }

    return false;
  }


}


