import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../../service/service.service';
import { giaovien } from '../../../model/giaovien';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  name:string='';
  paramater : string ="GiangVien/";
  MGV :string ="";
  constructor(private router : Router , private cookieService : CookieService , private service : ServiceService){
  
  }
  ngOnInit(): void {
    if (this.cookieService.get('Loai') === "false") {
      this.name = "Admin";
    } else {
      this.MGV = this.cookieService.get("MaGv");
      this.service.Get(this.paramater + this.MGV).subscribe(
        (res: giaovien) => {
          this.name = res.hoTen;
        },
        err => {
          console.error();
        },
        () => {
          console.log();
        }
      );
    }
    
  }
  history(){
    return this.router.navigateByUrl("History");
  }
  Logout(){
    alert("Đăng xuất thành công");
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/login');
  }
  trangchu() {
    this.router.navigate(['/trangchu']);
  }
  quanlidiem() {
    this.router.navigateByUrl('/Quanlidiem');
  }
  quanlisv(){
    this.router.navigateByUrl('/Quanlisinhvien');
  }
  quanligv(){
    this.router.navigateByUrl("Quanligiaovien");
  }
  quanlitk(){
    this.router.navigateByUrl('Quanlitk');
  }
  thongtin(){
    this.router.navigateByUrl('/Thongtin');
  }
  hocphan() {
  this.router.navigateByUrl("Quanlihocphan");
}
}