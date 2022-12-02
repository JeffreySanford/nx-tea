import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tea-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRoles = ['member', 'moderator'];
  constructor() {}

  ngOnInit(): void {}
}
