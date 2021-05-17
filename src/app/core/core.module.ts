import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


/**
 * Core Module
 * This module contains core components 
 */
@NgModule({
  declarations: [TitleHeaderComponent, CarouselComponent],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports:[
    TitleHeaderComponent,
    CarouselComponent
  ]
})
export class CoreModule { }
