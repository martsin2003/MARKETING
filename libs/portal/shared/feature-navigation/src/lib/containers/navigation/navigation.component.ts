import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'brookfield-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuOpened: boolean;
  isMobileScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 959px)']).subscribe(result => {
      this.isMobileScreen = result.matches;
    });
  }

  ngOnInit() {
    // One time check as the `observe` method in constructor doesn't always fire on page render
    this.isMobileScreen = this.breakpointObserver.isMatched(
      '(max-width: 959px)'
    );
  }

  toggleMenuOpen() {
    this.menuOpened = !this.menuOpened;
  }
}
