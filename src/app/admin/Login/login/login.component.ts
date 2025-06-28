import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flogin: any = {};
  accountData: any = {};

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private service: ServiceService
  ) {}

  ngOnInit(): void {}

onLogin() {
  if (!this.flogin.maGv || !this.flogin.matKhau) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }

  const param = `Account/Login?username=${this.flogin.maGv}&password=${this.flogin.matKhau}`;
  this.service.Get(param).subscribe(
    (data: any) => {
      console.log("Phản hồi từ server:", data);

      if (!data || !data.role || !data.account) {
        alert("Đăng nhập thất bại.");
        return;
      }

      const role = data.role;
      this.accountData = data.account;

      if (role === "Admin" || role === "GiangVien") {
        this.cookieService.set("MaGv", this.accountData.maGv.trim());
        this.cookieService.set("Loai", role === "Admin" ? "false" : "true");
        this.router.navigateByUrl("trangchu");
      } else {
        this.cookieService.set("MaSV", this.accountData.maSv.trim());
        this.router.navigateByUrl("sinhvien/dangkychungchi");
      }

      alert(`Đăng nhập thành công với vai trò: ${role}`);
    },
    (error) => {
      console.error("Lỗi đăng nhập:", error);
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  );
 };
}
