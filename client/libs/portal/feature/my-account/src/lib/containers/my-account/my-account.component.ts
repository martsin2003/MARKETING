import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from 'libs/portal/shared-components/src/lib/presentational/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'brookfield-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  bottomSheetOptions = [
    { title: 'My Favorites', option: 'my-favorites' },
    { title: 'My Time Home Tours', option: 'my-time' },
    { title: 'My Profile', option: 'my-profile' },
    { title: 'Sign Out', option: 'sign-out' }
  ];
  selectedOption = this.bottomSheetOptions[0];

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  selectOption(option: { title: string; option: string }) {
    this.selectedOption = option;
  }

  openBottomSheet() {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetComponent, {
      data: this.bottomSheetOptions
    });
    bottomSheetRef.afterDismissed().subscribe((option: { title: string; option: string }) => {
      if (option) {
        this.selectOption(option);
      }
    });
  }
}
