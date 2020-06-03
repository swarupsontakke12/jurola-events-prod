import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NgxUiLoaderModule
  ],
  exports: [LoaderComponent, NgxUiLoaderModule ]
})
export class SharedModule { }
