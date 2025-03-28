import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsListComponent } from '../friends-list/friends-list.component';
import { MapComponent } from '../map/map.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, FriendsListComponent, MapComponent, ContactFormComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() location: string = '';
  activeTab: string = 'friends';

  selectTab(tab: string){
    this.activeTab = tab
  }
}
