import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  user: any;

  @Output() locationChanged = new EventEmitter<string>();

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getUser().subscribe((data: any) => {
        this.user = data.results[0]
        console.log('Usuário carregado:', this.user);

        const city = this.user.location.city;
        const country = this.user.location.country;
        const fullLocation = `${city}, ${country}`;
        this.locationChanged.emit(fullLocation);
      });
  }
}
