import { Component } from '@angular/core';
import { ScrollToPageTopService } from '@brookfield/common/utilities';

@Component({
  selector: 'brookfield-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private scrollToPageTopService: ScrollToPageTopService) {
    this.scrollToPageTopService.scrollTopOnNavtigation();
  }
}
