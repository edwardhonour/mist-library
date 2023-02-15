import { NgModule } from '@angular/core';
import { MistComponentLibraryComponent } from './mist-component-library.component';
import { MistPageHeaderComponent } from './mist-page-header/mist-page-header.component';



@NgModule({
  declarations: [
    MistComponentLibraryComponent,
    MistPageHeaderComponent
  ],
  imports: [
  ],
  exports: [
    MistComponentLibraryComponent
  ]
})
export class MistComponentLibraryModule { }
