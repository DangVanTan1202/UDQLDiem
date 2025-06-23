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
export class LoginComponent implements OnInit{
  flogin:any={};
  accountData: any={};
 
  constructor(private router : Router , private cookieService : CookieService , private service : ServiceService){
  }

  ngOnInit(): void {
  }

  onLogin() {
    const paramater = 'Account/'+this.flogin.maGv+'&'+this.flogin.matKhau;
    if(this.flogin.maGv===null || this.flogin.matKhau ===null){
      alert("Vui lòng điền đầy đủ thông tin")
      return ;
    }
    this.service.Get(paramater).subscribe(data => {
      this.accountData = data;
      console.log(this.accountData);
      if (data != null) { 
        console.log(data);
        this.cookieService.set('MaGv', data.maGv);
        this.cookieService.set('Loai', data.loai.toString());
        alert("Đăng nhập thành công");
        this.router.navigateByUrl("trangchu");
      } else {
        console.log('Lỗi rồi');
        alert("Đăng nhập thất bại");
      }
    }, error => {
      console.error('Đã xảy ra lỗi khi gọi API', error);
      alert("Đăng nhập thất bại. Vui lòng thử lại sau.");
    });
  }
    
  
}