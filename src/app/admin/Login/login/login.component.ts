import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../../service/service.service';
import { account } from '../../../model/taikhoan';
import { read } from 'node:fs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
}