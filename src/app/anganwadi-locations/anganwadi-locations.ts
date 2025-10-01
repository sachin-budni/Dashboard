import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';
import { fromLonLat } from 'ol/proj';
// Interface for the data points
interface AnganwadiData {
  id: number;
  lat: number;
  lon: number;
  children: number;
  name: string;
}

@Component({
  selector: 'app-anganwadi-locations',
  imports: [
    MaterialModule,
    FormsModule
  ],
  templateUrl: './anganwadi-locations.html',
  styleUrl: './anganwadi-locations.scss'
})
export class AnganwadiLocations implements OnInit {
  map!: Map;
  selectedMetric!: any;
  vectorSource!: VectorSource;
  data: AnganwadiData[] = [
    // Mock data based on the general location in the image (likely Andhra Pradesh/Telangana)
    // Replace with your actual data
    // { id: 1, lat: 17.43, lon: 78.49, children: 120, name: 'A-Wadi 1' },
    // { id: 2, lat: 17.50, lon: 78.55, children: 50, name: 'A-Wadi 2' },
    // { id: 3, lat: 17.38, lon: 78.46, children: 200, name: 'A-Wadi 3' },
    // ... 22 more entries

    { id: 1, name: 'AW Center A', lat: 17.0, lon: 78.0, children: 50 },
    { id: 2, name: 'AW Center B', lat: 17.05, lon: 78.02, children: 120 },
    { id: 3, name: 'AW Center C', lat: 16.98, lon: 77.95, children: 30 },
    { id: 4, name: 'AW Center D', lat: 17.1, lon: 78.1, children: 200 },
    { id: 5, name: 'AW Center E', lat: 16.95, lon: 78.05, children: 80 },
    { id: 6, name: 'AW Center F', lat: 17.15, lon: 78.08, children: 150 },
    { id: 7, name: 'AW Center G', lat: 17.03, lon: 77.98, children: 60 },
    { id: 8, name: 'AW Center H', lat: 17.2, lon: 78.0, children: 90 },
    { id: 9, name: 'AW Center I', lat: 17.08, lon: 77.9, children: 110 },
    { id: 10, name: 'AW Center J', lat: 17.12, lon: 77.93, children: 70 },
    { id: 11, name: 'AW Center K', lat: 16.9, lon: 78.15, children: 40 },
    { id: 12, name: 'AW Center L', lat: 17.07, lon: 78.18, children: 180 },
    { id: 13, name: 'AW Center M', lat: 16.93, lon: 78.08, children: 25 },
    { id: 14, name: 'AW Center N', lat: 17.01, lon: 78.12, children: 95 },
    { id: 15, name: 'AW Center O', lat: 17.18, lon: 77.96, children: 130 },
    { id: 16, name: 'AW Center P', lat: 16.97, lon: 78.03, children: 75 },
    { id: 17, name: 'AW Center Q', lat: 17.06, lon: 78.09, children: 105 },
    { id: 18, name: 'AW Center R', lat: 17.14, lon: 78.01, children: 85 },
    { id: 19, name: 'AW Center S', lat: 16.99, lon: 78.16, children: 65 },
    { id: 20, name: 'AW Center T', lat: 17.02, lon: 77.92, children: 140 },
    { id: 21, name: 'AW Center U', lat: 17.16, lon: 78.13, children: 55 },
    { id: 22, name: 'AW Center V', lat: 16.92, lon: 77.97, children: 115 },
    { id: 23, name: 'AW Center W', lat: 17.11, lon: 78.06, children: 160 },
    { id: 24, name: 'AW Center X', lat: 17.04, lon: 78.0, children: 20 },
    { id: 25, name: 'AW Center Y', lat: 17.09, lon: 78.04, children: 170 },
  ];
  maxChildren: number = 0; // For scaling bubble size

  ngOnInit() {
    this.maxChildren = Math.max(...this.data.map(d => d.children));
    this.initializeMap();
  }

  initializeMap() {
    this.vectorSource = new VectorSource({
      features: this.createFeatures(this.data)
    });

    const vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: (feature: any) => this.getBubbleStyle(feature)
    });

    this.map = new Map({
      target: 'map', // Matches the div ID in HTML
      layers: [
        new TileLayer({
          source: new OSM() // Base map layer
        }),
        vectorLayer // Custom bubble layer
      ],
      view: new View({
        // Center the map based on the mock data's general area (Hyderabad region)
        // lat: 17.1, lon: 78.1,
        center: fromLonLat([78.1, 17.1]),
        zoom: 10
      })
    });
  }

  // Converts your data into OpenLayers Feature objects
  createFeatures(data: AnganwadiData[]): Feature[] {
    return data.map(item => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([item.lon, item.lat])),
        children: item.children, // Store the count in the feature properties
        name: item.name
      });
      return feature;
    });
  }

  // Creates the dynamic bubble style based on the 'children' count
  getBubbleStyle(feature: Feature): Style {
    const childrenCount = feature.get('children');
    
    // Scale the radius: The minimum size is set to 5px, and the maximum to 30px
    // The scale factor can be adjusted to visually match the image.
    const baseRadius = 5; 
    const scaleFactor = 25 / this.maxChildren; 
    const radius = baseRadius + (childrenCount * scaleFactor);

    return new Style({
      image: new Circle({
        radius: radius,
        fill: new Fill({
          // Semi-transparent dark grey/blue for the bubble
          color: 'rgba(107, 114, 128, 0.7)' 
        }),
        stroke: new Stroke({
          color: 'rgba(255, 255, 255, 1)', // Darker border
          width: 1
        })
      })
    });
  }
  onMetricChange(value: any) {
    this.selectedMetric = value;
  }
}
