import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-modal',
  templateUrl: './map-icon.component.html',
  styleUrls: ['./map-icon.component.scss'],
})
export class MapIconComponent {
  @Input() coordinates!: string[];

  constructor(private readonly dialog: MatDialog) {}

  public openMap(): void {
    this.dialog.open(MapComponent, {
      width: '90%',
      height: '90%',
      data: {
        coordinates: this.coordinates,
      },
    });
  }
}
