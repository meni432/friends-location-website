import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  latitude : number;
  longitude : number;

  constructor(public af: AngularFire){
    this.af.auth.subscribe(auth => this.onAuth(auth));
    this.items = af.database.list('/hex_to_key');
  }
  title = 'app works!';

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }


  loadMap() {
    console.log('load map: lat: ' + this.latitude + ' lot: ' + this.longitude);
  }


  // add data listener to database current last Location
  onAuth(auth : any) {
    var path : string = '/user_detail/'+auth.uid+'/lastLocation/';
    // this.items = this.af.database.list(path);
    this.af.database.list(path, { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
          if (snapshot.key == 'latitude') {
            console.log('latitude: ' + snapshot.val());
            this.latitude = snapshot.val();
          }
          if (snapshot.key == 'longitude') {
            console.log('longitude: ' + snapshot.val());
            this.longitude = snapshot.val();
          }
        });

        this.loadMap();

    })
  }
}
