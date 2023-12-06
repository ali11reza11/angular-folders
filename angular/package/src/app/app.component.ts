import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCorrect: boolean = false;

  styles = {

  }

  classes = {

  }

  users: string[] = [
    `ali`, `reza`, `mamad`
  ]

  usersObj: any = [
    {
      name: `ali`,
      id: 1
    },
    {
      name: `reza`,
      id: 2
    },
    {
      name: `mamad`,
      id: 3
    }
  ]

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      'color': 'red'
    }

    this.classes = {
      'big-font-size': true,
      'small-font-size': true
    }
  }

  public adduser() {
    this.usersObj = [
      {
        name: `ali`,
        id: 1
      },
      {
        name: `reza`,
        id: 2
      },
      {
        name: `mamad`,
        id: 3
      },
      {
        name: `hamid`,
        id: 4
      }
    ]
  }

  public trackbfunc(index: number, element: any) {
    return element.id
  }
}
