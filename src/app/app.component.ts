import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private loaderSevice: LoaderService) { }
  title = 'Event System';

  ngOnInit() {
    this.loaderSevice.start('master'); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.loaderSevice.stop('master'); // stop foreground spinner of the master loader with 'default' taskId
    }, 900);
  }
}
