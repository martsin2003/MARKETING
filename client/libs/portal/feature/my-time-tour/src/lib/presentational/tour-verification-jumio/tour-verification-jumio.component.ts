import { Observable } from 'rxjs';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'brookfield-tour-verification-jumio',
  templateUrl: './tour-verification-jumio.component.html',
  styleUrls: ['./tour-verification-jumio.component.scss']
})
export class TourVerificationJumioComponent implements OnInit {
  @Input() jumioLink: string;
  @Output() jumioVerificationSubmitted = new EventEmitter<string>();
  jumioLinkSafe: SafeResourceUrl;
  isMobileView$: Observable<boolean>;
  constructor(
    public sanitizer: DomSanitizer,
    private detectMobileViewService: DetectMobileViewService
  ) {}

  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
    this.jumioLinkSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.jumioLink);
    this.listenForIframeMessage();
  }

  listenForIframeMessage() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }
  receiveMessage(event) {
    const data = window['JSON'].parse(event.data);
    if (data.payload.value === 'success') {
      this.jumioVerificationSubmitted.emit();
    }
    window.removeEventListener('message', this.receiveMessage.bind(this), false);
  }
}
