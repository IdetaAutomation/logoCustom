import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RgbaColor } from 'angular-colorful';
import { ToolCustom } from '../toolCustom';

/**
 * Tool Background
 * Component allows to manage background of the svg
 * Possibilities : 
 * 1. Activate/Desactivate Background
 * 2. Change Background color
 */
@Component({
  selector: 'app-tool-background',
  templateUrl: './tool-background.component.html',
  styleUrls: ['./tool-background.component.scss']
})
export class ToolBackgroundComponent extends ToolCustom{

  /**
   * Hide output
   */
  @Output() hideBgChanged = new EventEmitter<boolean>();
  /**
   * Color picked output
   */
  @Output() colorPickedChanged = new EventEmitter<RgbaColor>();


  /**
   * Emit new toggle status boolean
   * @param event toggle event received
   */
  public toggleChange(event : MatSlideToggleChange){
    this.hideBgChanged.emit(!event.checked);
  }


  /**
   * Emit new color picked 
   * @param event color event received
   */
  public colorChanged(event: RgbaColor): void{
    this.colorPickedChanged.emit(event);
  }
}
