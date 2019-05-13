import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'brookfield-home-plans',
  templateUrl: './home-plans.component.html',
  styleUrls: ['./home-plans.component.scss']
})
export class HomePlansComponent implements OnInit {

  @ViewChild('viewsMenu') viewsMenu: ElementRef<HTMLDivElement>;
  @ViewChild('filterTools') filterTools: ElementRef<HTMLDivElement>;
  
  selectedViewType: string = 'See All Home Plans';

  constructor() { }

  ngOnInit() {
  }

  openViewsMenu() {
    this.viewsMenu.nativeElement.style.display = 'flex';
    setTimeout(() => {
      this.viewsMenu.nativeElement.style.transform = 'translateY(0px)';
    }, 10);
  }

  openFilterTools() {
    document.querySelector('body').style.overflow = 'hidden';
    this.filterTools.nativeElement.style.display = 'block';
    setTimeout(() => {
      this.filterTools.nativeElement.style.transform = 'translateY(0px)';
    }, 10);
  }
  
  closeViewsMenu(viewType: string = null) {
    if(viewType) {
      this.selectedViewType = viewType;
    }
    setTimeout(() => {
      this.viewsMenu.nativeElement.style.display = 'none';
    }, 500);
    this.viewsMenu.nativeElement.style.transform = 'translateY(250px)';
  }

  closeFilterTools(submitted: boolean) {
    if(submitted) {
      console.log('Update');
    }
    document.querySelector('body').style.overflow = 'auto';
    setTimeout(() => {
      this.filterTools.nativeElement.style.display = 'none';
    }, 500);
    this.filterTools.nativeElement.style.transform = 'translateY(100vh)';
  }
  
}
