import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Iuser } from '../interface/app-inrerface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user?: Iuser;
  isonedit: boolean = false;
  pEl?: string;
  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userservice.users.find(user => user.id === +this.route.snapshot.params['id'])
    if (!this.user) {
      this.router.navigate(['/users'])
    }
  }

  public onedituser() {
    this.router.navigate(['./edit'], { relativeTo: this.route, queryParams: { editmode: '1', isAdmin: '1' }, fragment: 'title1' })
    this.isonedit = true;

  }

  public input(event: Event) {
    this.pEl = (<HTMLInputElement>event.target).value;
  }


}
