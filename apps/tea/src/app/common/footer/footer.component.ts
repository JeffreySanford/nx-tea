import { Component, Input } from '@angular/core';

export interface SocialButton {
  name: string;
  url: string;
  icon: string;
  disabled: boolean;
}

@Component({
  selector: 'tea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class AppFooterComponent {
  @Input() color: string | undefined;

  projectLove: SocialButton[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JeffreySanford/ng-jeffrey-sanford',
      icon: 'code',
      disabled: false,
    },
  ];
}
