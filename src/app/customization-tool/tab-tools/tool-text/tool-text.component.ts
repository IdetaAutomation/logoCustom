import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RgbaColor } from 'angular-colorful';
import { ToolCustom } from '../toolCustom';


/**
 * Tool Text
 * Component allows to manage text of the svg
 * Possibilities : 
 * 1. Activate/Desactivate Text
 * 2. Change Text color
 * 3. Change position (x,y)
 */
@Component({
  selector: 'app-tool-text',
  templateUrl: './tool-text.component.html',
  styleUrls: ['./tool-text.component.scss']
})
export class ToolTextComponent extends ToolCustom {
  @Output() hideTextChanged = new EventEmitter<boolean>();
  @Output() colorPickedChanged = new EventEmitter<RgbaColor>();


  /**
   * Emit new toggle status boolean
   * @param event toggle event received
   */
  toggleChange(event: MatSlideToggleChange): void {
    this.hideTextChanged.emit(!event.checked);
  }

  /**
   * Emit the new color picked
   * @param event 
   */
  public colorChanged(event: RgbaColor): void {
    this.colorPickedChanged.emit(event);
  }
}
