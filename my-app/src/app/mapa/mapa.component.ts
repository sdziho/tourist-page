import { Component, OnInit } from '@angular/core';
import { SerrService} from "../serr.service";

declare const L: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})


export class MapaComponent implements OnInit {
  
  grad1:string='mostar';
  grad2:string='sarajevo';
  ispisi:any='nista';
  str:any='daa';

  constructor(private _serrService: SerrService) { 
    this._serrService.messagePocetna.subscribe((message: string) => {
      //console.log('Message: ', message); 
      this.grad1=message;
    });
    this._serrService.messageKrajnja.subscribe((message: string) => {
      //console.log('Message: ', message); 
      this.grad2=message;
    });
  }
  
  ngOnInit(): void {
    
    
    var ko1:number,ko2:number,ko3:number,ko4:number;

    var mymap = L.map('mapa').setView([43.84, 17.9], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9kamVuaSIsImEiOiJja2cwbnF0N3AwZXNrMnlvMnF1Nnd2Nm9zIn0.4DjsHA6V_jCqsIi1MOeQ4Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);


    var rez=L.esri.Geocoding.geocode().text(this.grad2)
    
    L.esri.Geocoding.geocode().text(this.grad1).run(function (err, response) {
      if (err) {
        console.log(err);
        return;
      }
      ko1=response.results[0].latlng.lat
      ko2=response.results[0].latlng.lng
      L.marker(response.results[0].latlng).addTo(mymap);

      rez.run(function (err, response) {
        if (err) {
          console.log(err);
          return;
        }
        ko3=response.results[0].latlng.lat
        ko4=response.results[0].latlng.lng
        L.marker(response.results[0].latlng).addTo(mymap);
        //console.log(ko1,ko2);
        //console.log(ko3,ko4)
        L.Routing.control({
          waypoints: [
            L.latLng(ko1,ko2),
            L.latLng(ko3,ko4)
          ]
        }).addTo(mymap);

      });
    });
    

  }//ngOnit zagrada
  
  vratiObjekt(){
    var southWest = L.latLng(43.276, 17.750);
    var northEast = L.latLng(43.383, 17.877);
    var bounds = L.latLngBounds(southWest, northEast); 
    //Historical Monument
    var nadjiHotel=L.esri.Geocoding.geocode().text('hotel').within(bounds)
    var results = nadjiHotel.run(function (err,results, response) {
      //console.log(results);
    });
    
    results.onreadystatechange=function() {
      if (this.readyState==4) {
        //obradiText(this.responseText)
        //MapaComponent.obradiText(res);
        
        
      }
    }
    
  }

  
  
  

}
