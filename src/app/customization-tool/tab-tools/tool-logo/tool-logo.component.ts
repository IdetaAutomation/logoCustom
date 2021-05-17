import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RgbaColor } from 'angular-colorful';
import { LOGO } from 'src/app/enum/logo.enum';
import { Position } from 'src/app/model/models';
import { ToolCustom } from '../toolCustom';

/**
 * Tool Logo
 * Component allows to manage logo of the svg
 * Possibilities : 
 * 1. Activate/Desactivate Logo
 * 2. Change Logo color
 * 3. Change position (x,y)
 */
@Component({
  selector: 'app-tool-logo',
  templateUrl: './tool-logo.component.html',
  styleUrls: ['./tool-logo.component.scss']
})
export class ToolLogoComponent extends ToolCustom {

  @Output() hideLogoChanged = new EventEmitter<boolean>();
  @Output() logoChanged = new EventEmitter<LOGO>();
  @Output() colorPickedChanged = new EventEmitter<RgbaColor>();
  @Output() sliderValueEvent = new EventEmitter<Position>();

  /**
   * Logo to display
   */
  public logoEnum = LOGO;


  /**
   * Emit new toggle status boolean
   * @param event toggle event received
   */
  public toggleChange(event: MatSlideToggleChange): void {
    this.hideLogoChanged.emit(!event.checked);
  }


  /**
   * Emit new logo to be display
   * @param event 
   */
  public radioChange(event: MatRadioChange): void {
    switch (event.value) {
      case 'logo1':
        this.logoChanged.emit(LOGO.LOGO_1);
        break;
      case 'logo2':
        this.logoChanged.emit(LOGO.LOGO_2);
        break;
      case 'logo3':
        this.logoChanged.emit(LOGO.LOGO_3);
        break;
      default:
        break;
    }
  }

  /**
   * Emit the new color picked
   * @param event 
   */
  public colorChanged(event: RgbaColor): void {
    this.colorPickedChanged.emit(event);
  }

}
