import { Component, Input, OnInit } from '@angular/core';


/**
 * Carousel Block
 * Display a title header with a carousel 
 */
@Component({
  selector: 'app-carousel-block',
  templateUrl: './carousel-block.component.html',
  styleUrls: ['./carousel-block.component.scss']
})
export class CarouselBlockComponent {

  /**
   * List of paths of images to display
   */
  @Input() carouselImgs: { 'path': string }[] = [];

}
