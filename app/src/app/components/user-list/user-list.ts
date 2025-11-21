import { Component } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: User[] = [];

  private userService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response?.results ?? [];
    })
  }
}
