import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@brookfield/material';
import { FooterMobileComponent } from './presentational/footer-mobile/footer-mobile.component';
import { FooterComponent } from './containers/footer/footer.component';
import { FooterDesktopComponent } from './presentational/footer-desktop/footer-desktop.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [FooterMobileComponent, FooterComponent, FooterDesktopComponent],
  exports: [FooterComponent]
})
export class PortalSharedFeatureFooterModule {}
