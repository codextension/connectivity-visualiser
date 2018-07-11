import { Component, ViewChild } from '@angular/core';
import { latLng, tileLayer, DomUtil, Control, Map, LayerOptions } from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  options = {
    layers: [
      tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        { maxZoom: 18, attribution: '...', id: 'mapbox.streets' })
    ],
    zoom: 13,
    center: latLng(48.792053, 9.187813)
  };

  uploadControl = new Control({
    position: 'topleft'
  });

  ngOnInit() {
    this.uploadControl.onAdd = (mapbox: Map) => {
      let container: HTMLElement = DomUtil.create('label', 'leaflet-bar leaflet-control');
      container.style.backgroundColor = 'white';
      container.style.width = '30px';
      container.style.height = '30px';
      container.style.backgroundImage ='url(/assets/upload.png)';
      container.style.backgroundSize='cover';
      container.style.backgroundRepeat='no-repeat';
      container.style.backgroundPosition='center center';
      container.style.cursor='pointer';
      container.setAttribute('for','data_upload');
      return container;
    };

    
  }

  onMapReady(map: Map) {
    map.addControl(this.uploadControl);
  }

  onChange(event:any) {
    console.info('changed');
  }

}