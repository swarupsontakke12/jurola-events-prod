import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html',
  styleUrls: ['./events-listing.component.scss']
})
export class EventsListingComponent implements OnInit {
  allEvents = [];
  currentOffset = 0;

  constructor(private serv: DataService, private loaderservice: LoaderService) { }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.warn('at bottom of page');
      this.currentOffset += environment.API.eventsPerPage;
      this.getEvents();
    } else {
      console.log('scrolling ...');
    }
  }

  ngOnInit(): void {
    this.allEvents = [];
    this.getEvents();
  }
  getEvents() {
    // this.allEvents = [];
    const fd = { offset: this.currentOffset, requestItemsCount: environment.API.eventsPerPage };
    this.serv.httpPost(environment.API.getAllEvents, fd).subscribe(
      (results: any) => {
        console.log("results: ", results);
        results.result.forEach(event => {
          this.allEvents.push(event);
        });
      },
      (err) => {
        console.log("err: ", err);

      }
    );
  }
}
