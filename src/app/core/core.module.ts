import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsListingComponent } from './components/events-listing/events-listing.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, SearchComponent, FooterComponent, EventsListingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, SearchComponent , FooterComponent , EventsListingComponent]
})

export class CoreModule { }
