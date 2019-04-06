import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis/ellipsis.pipe';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EllipsisPipe,
    FilterPipe
  ],
  exports: [
    EllipsisPipe,
    FilterPipe
  ]
})
export class PipesModule { }
