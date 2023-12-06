import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Iuser } from '../interface/app-inrerface';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user?: Iuser;

  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userservice.users.find(user => user.id === +this.route.parent?.snapshot.params['id'])
    if (!this.user) {
      this.router.navigate(['/users'])
    }
  }
  public saveschanges(name: string, age: number) {
    if (this.user) {
      this.user.name = name;
      this.user.age = age
      this.router.navigate(['/users'])

    }
  }


}
