import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SerrService} from "../serr.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  krajnja:string;
  pocetna:string;
  
  
  constructor(private _serrService: SerrService) { }
  ngOnInit(): void {
  }
  
  sendMessage(): void {
    this._serrService.messagePocetna.next(this.pocetna);
    this._serrService.messageKrajnja.next(this.krajnja);
  }
  
}
