import { Component, OnInit } from '@angular/core';
import { RisorseService } from './services/risorse.service';
import { CommonModule } from '@angular/common'; 
import { GoogleMapsModule } from '@angular/google-maps'; 

@Component({
  selector: 'app-domicilio',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule], 
  template: `
    <google-map height="600px" width="100%" [center]="center" [zoom]="zoom">
      <map-marker 
        *ngFor="let marker of markers"
        [position]="marker.position"
        [title]="marker.title"
        (mapClick)="openInfoWindow(marker)"> 
      </map-marker>
    </google-map>
  `
})
export class DomicilioComponent implements OnInit { 
  center: google.maps.LatLngLiteral = { lat: 45.4642, lng: 9.1900 };
  zoom = 11;
  markers: any[] = [];

  constructor(private risorseService: RisorseService) {}

  ngOnInit() {
    this.caricaRisorse();
  }

  caricaRisorse() {
    this.risorseService.getAllRisorse().subscribe({
      next: (res) => {
        if (res.success) {
          this.markers = res.data.map((r: any) => ({
            position: { lat: r.lat, lng: r.lng }, 
            title: r.nome,
            id: r.id
          }));
        }
      },
      error: (err) => console.error('Errore caricamento risorse', err)
    });
  }

  openInfoWindow(marker: any) {
    console.log('Risorsa selezionata:', marker.title);
  }
}