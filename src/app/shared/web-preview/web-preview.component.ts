import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-web-preview',
  templateUrl: './web-preview.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
      img {
        transition: filter 0.3s ease-in-out;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebPreviewComponent implements AfterViewInit {
  @Input() url: string = '';
  @Input() width: number = 1308;
  @Input() height: number = 816;
  constructor(private cdr: ChangeDetectorRef) {}

  api_key = `bbfe39067d11431da3035be88ac75f51`;
  image: string = '';

  ngAfterViewInit() {
    this.loadImage();
    this.cdr.detectChanges();
  }

  loadImage() {
    const src = `https://api.apiflash.com/v1/urltoimage?access_key=${this.api_key}&url=${this.url}&format=png&width=${this.width}&height=${this.height}`;
    this.image = src;
  }
}
