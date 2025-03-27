import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MapComponent } from './components/map/map.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProfileCardComponent,
    FriendsListComponent,
    TabsComponent,
    MapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-profile-card';
}
