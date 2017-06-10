
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAdP26DPZ56P4ntAU8y1qN52-OlH7fr2ds',
      authDomain: 'ng-recipe-book-6cf4f.firebaseapp.com'
    });
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
