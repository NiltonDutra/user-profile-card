import { Component } from '@angular/core';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-profile-card';

  location: string = '';

  onLocationChange(newLocation: string) {
    this.location = newLocation;
    console.log('Location appComponent', this.location);
  }
}
