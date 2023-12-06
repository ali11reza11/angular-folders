import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../interface/app-inrerface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userservice: UserService) { }

  users?: Iuser[];

  ngOnInit(): void {
    this.users = this.userservice.users
  }
}
