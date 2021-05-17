import { Component, EventEmitter, Output } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { RgbaColor } from "angular-colorful";
import { Position } from "src/app/model/models";

/**
 * Component for setting the position of an element in SVG
 * This component is used for being extends by other components
 * This component contains output and attributes
 */
@Component({
    selector: '',
    template: ''
})
export class ToolCustom {

    /**
     * Output position (x,y) when the user click finish 
     */
    @Output() sliderValueEvent = new EventEmitter<Position>();

    /**
     * Color of the button
     */
    public color: ThemePalette = 'primary';

    /**
     * Toggle check status
     */
    public checked = true;

    /**
     * Toggle disable status
     */
    public disabled = false;

    /**
     * Initial color of color picker
     */
    public colorPicker: RgbaColor = { r: 150, g: 79, b: 74, a: 0 };

    /**
     * Slider x value
     */
    public currentX: number = 0;

    /**
     * Slider Y value
     */
    public currentY: number = 0;


    /**
     * Emit an event output when the x value changed
     * @param value Slider x value
     */
    public sliderValueXChange(value: number | null): void {
        if (value) {
            this.currentX = value;
            this.sliderValueEvent.emit({ x: this.currentX, y: this.currentY });
        }
    }

    /**
     * Emit an event output when the y value changed
     * @param value Slider y value
     */
    public sliderValueYChange(value: number | null): void {
        if (value) {
            this.currentY = value;
            this.sliderValueEvent.emit({ x: this.currentX, y: this.currentY });
        }
    }

    /**
     * Number to show in the tooltip of the slider
     * @param value Slider value
     * @returns 
     */
    public formatLabel(value: number): number {
        return value;
    }


    /**
     * Reset sliders values
     */
    public resetPosition(): void {
        this.currentX = 0;
        this.currentY = 0;
        this.sliderValueEvent.emit({ x: this.currentX, y: this.currentY });
    }
}