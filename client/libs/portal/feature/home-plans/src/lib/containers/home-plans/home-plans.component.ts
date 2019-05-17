import { HomePlansOptionsComponent } from './../../presentational/home-plans-options/home-plans-options.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'brookfield-home-plans',
  templateUrl: './home-plans.component.html',
  styleUrls: ['./home-plans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePlansComponent implements OnInit {
  openViewFilter: { open: boolean } = { open: false };
  selectedViewType = 'See All Home Plans';

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openFilter() {
    this.openViewFilter = { open: true };
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(HomePlansOptionsComponent);
    bottomSheetRef.afterDismissed().subscribe((type: string) => {
      if (type) {
        this.selectedViewType = type;
      }
    });
  }
}
