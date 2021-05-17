import { Component, EventEmitter, Output } from '@angular/core';
import { RgbaColor } from 'angular-colorful';
import { LOGO } from 'src/app/enum/logo.enum';
import { Position } from 'src/app/model/models';

@Component({
  selector: 'app-tab-tools',
  templateUrl: './tab-tools.component.html',
  styleUrls: ['./tab-tools.component.scss']
})
export class TabToolsComponent {

  /**
   * Hide Logo output
   */
  @Output() hideLogoChanged = new EventEmitter<boolean>();
  /**
   * Hide Text output
   */
  @Output() hideTextChanged = new EventEmitter<boolean>();
  /**
   * Hide Background output
   */
  @Output() hideBgChanged = new EventEmitter<boolean>();
  /**
   * Logo output
   */
  @Output() logoChanged = new EventEmitter<LOGO>();
  /**
    * Color logo output
    */
  @Output() colorLogoChanged = new EventEmitter<RgbaColor>();
  /**
    * Color Text output
    */
  @Output() colorTextChanged = new EventEmitter<RgbaColor>();
  /**
    * Color Background output
    */
  @Output() colorBgChanged = new EventEmitter<RgbaColor>();
  /**
    * Slider position (x,y) Logo output
    */
  @Output() sliderLogoEvent = new EventEmitter<Position>();
  /**
    * Slider position (x,y) text output
    */
  @Output() sliderTextEvent = new EventEmitter<Position>();

  public hideLogoChange(event: boolean): void {
    this.hideLogoChanged.emit(event);
  }

  public hideTextChange(event: boolean): void {
    this.hideTextChanged.emit(event);
  }

  public hideBgChange(event: boolean): void {
    this.hideBgChanged.emit(event);
  }

  public radioChange(event: LOGO): void {
    this.logoChanged.emit(event);
  }

  public colorLogoEventChanged(event: RgbaColor): void {
    this.colorLogoChanged.emit(event);
  }

  public colorTextEventChanged(event: RgbaColor): void {
    this.colorTextChanged.emit(event);
  }

  public colorBgEventChanged(event: RgbaColor): void {
    this.colorBgChanged.emit(event);
  }

  public sliderLogoChanged(value: Position): void {
    this.sliderLogoEvent.emit(value);
  }

  public sliderTextChanged(value: Position): void {
    this.sliderTextEvent.emit(value);
  }
}
