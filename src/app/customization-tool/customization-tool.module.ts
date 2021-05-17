import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToolComponent } from './custom-tool/custom-tool.component';
import { TabToolsComponent } from './tab-tools/tab-tools.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { ToolBackgroundComponent } from './tab-tools/tool-background/tool-background.component';
import { ToolTextComponent } from './tab-tools/tool-text/tool-text.component';
import { ToolLogoComponent } from './tab-tools/tool-logo/tool-logo.component';
import { AngularColorfulModule } from 'angular-colorful';
import { CoreModule } from '../core/core.module';
import { CarouselBlockComponent } from './carousel-block/carousel-block.component';
import { MatButtonModule } from '@angular/material/button';


/**
 * Customization Tool Module
 * This module contains all components for logo custom tool
 */
@NgModule({
  declarations: [
    CustomToolComponent,
    TabToolsComponent,
    ToolLogoComponent,
    ToolBackgroundComponent,
    ToolTextComponent,
    CarouselBlockComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    AngularColorfulModule,
  ],
  exports: [
    CustomToolComponent,
    CarouselBlockComponent
  ]
})
export class CustomizationToolModule { }
