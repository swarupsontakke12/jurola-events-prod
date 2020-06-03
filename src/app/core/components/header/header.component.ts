import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  burgerMenu() {
    const element = this.elRef.nativeElement.querySelector('ul');
    console.log(element);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

}
