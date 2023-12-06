import { Component, OnInit } from '@angular/core';
import { Iuser } from '../interfaces/user.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Iuser[] = [
    {
      id: 1,
      name: `ali`
    },
    {
      id: 2,
      name: `mamad`
    },
    {
      id: 3,
      name: `reza`
    },
    {
      id: 4,
      name: `ahmad`
    },
  ]

  selectedId?: number;
  selectedUser?: Iuser;
  isUserFound: boolean = true
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params['id']
    this.selectedUser = this.user.find(user => user.id === this.selectedId)
    if (!this.selectedUser) {
      this.isUserFound = false
    }
    this.route.params.subscribe((parm: Params) => {
      this.selectedUser = this.user.find(user => user.id === +parm['id'])
    })
  }
  public navigate() {
    this.router.navigate(['/users'])
  }
}
