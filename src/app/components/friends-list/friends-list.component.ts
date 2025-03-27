import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
[x: string]: any;
  friends: any[] = [];
lef: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.getUsersList(8).subscribe((data: any) => {
        this.friends = data.results;
      });
  }

}
