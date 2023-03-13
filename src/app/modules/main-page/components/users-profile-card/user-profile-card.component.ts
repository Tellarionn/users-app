import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss'],
})
export class UserProfileCardComponent {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() photo: string = '';
  @Input() email: string = '';
  @Input() birthday: string = '';
  @Input() location: string[] = [];
  @Input() phone: string = '';

  public cardContent: string = '';

  @HostListener('mouseleave') onMouseLeave() {
    this.cardContent = '';
  }

  public changeContent(value: string): void {
    this.cardContent = value;
  }
}
