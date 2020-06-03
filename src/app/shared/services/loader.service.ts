import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private ngxLoader: NgxUiLoaderService) { }
  start(loaderId, taskId?) {
    this.ngxLoader.startLoader(loaderId, taskId);
  }

  stop(loaderId, taskId?) {
    this.ngxLoader.stopLoader(loaderId, taskId);
  }

  startLoader(loaderId) {
    this.ngxLoader.stopAll();
    this.ngxLoader.startLoader(loaderId);
  }

  stopLoader(loaderId) {
    this.ngxLoader.stopLoader(loaderId);
  }

  stopAllLoader() {
    this.ngxLoader.stopAll();
  }



}
