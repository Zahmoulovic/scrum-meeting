import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public user: User;
    toggleLeftMenu: boolean = false;

    constructor() { }
    ngOnInit(): void {
        this.user = new User();
        this.user.active = true;

    }

    hello() {
        console.log(this.toggleLeftMenu);
    }
}
