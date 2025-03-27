import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from '../friends-list/friends-list.component';
import { MapComponent } from '../map/map.component';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, FriendsListComponent, MapComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  activeTab: string = 'friends';
  
  selectTab(tab: string){
    this.activeTab = tab
  }
}
