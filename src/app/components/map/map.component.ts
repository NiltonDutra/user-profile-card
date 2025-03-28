import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  @Input() location: string = '';
  mapUrl: SafeResourceUrl = '';

  // ✅ Aqui está a injeção correta do DomSanitizer
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    const encodedLocation = encodeURIComponent(this.location);
    const url = `https://maps.google.com/maps?q=${encodedLocation}&output=embed`;

    // ✅ Aqui usamos o DomSanitizer corretamente
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
