import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Globalna } from './globalna'

@Injectable({
  providedIn: 'root'
})
export class SerrService {
  messagePocetna: BehaviorSubject<string> = new BehaviorSubject('');
  messageKrajnja: BehaviorSubject<string> = new BehaviorSubject('');
  lokacija: BehaviorSubject<Globalna> = new BehaviorSubject({
    name:'',
    adresa:'',
    lat:0,
    lng:0
  });

}


