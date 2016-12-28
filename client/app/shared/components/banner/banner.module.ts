/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ],
  declarations: [
    BannerComponent
  ]
})
export class BannerModule { }
