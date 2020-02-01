import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { visitAll } from '@angular/compiler';
import {Visit} from '../Models/visit';

@Injectable({
  providedIn: 'root'
})


export class MainService {
  visitsCollection : AngularFirestoreCollection<Visit>
  visits: Observable<Visit[]>
  constructor(public afs: AngularFirestore) { 

    this.visitsCollection = this.afs.collection('visits', ref => ref.orderBy('title','asc'));

  }

  addItem(visit: Visit){
    this.visitsCollection.add(visit);
  }

}

