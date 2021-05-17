import { Component, Input } from '@angular/core';

/**
 * Carousel component
 * This component is used for displaying images 
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {


  /**
   * List of urls of images
   */
  @Input() images : {'path': string}[] = [];

}
