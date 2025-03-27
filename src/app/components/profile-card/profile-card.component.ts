import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getUser().subscribe((data: any) => {
        this.user = data.results[0]
        console.log('Usuário carregado:', this.user);
      });
  }
}
