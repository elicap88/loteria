import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

const material = [MatGridListModule, MatButtonToggleModule,FormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, material],
  exports: [material],
})
export class MaterialModule {}
