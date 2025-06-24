import { Component, OnInit } from '@angular/core';
import { account } from '../../model/taikhoan';
import { ServiceService } from '../../service/service.service';
import { error } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { giaovien } from '../../model/giaovien';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css'],
})
export class ThongtinComponent implements OnInit {
  giangvien: giaovien = {
    maGv: '',
    hoTen: '',
    ngaySinh: '',
    gioiTinh: '',
    diaChi: '',
    sdt: 0,
    maHp: '',
  };
  constructor(
    private service: ServiceService,
    private ckservice: CookieService
  ) {}
  parameter: string = 'GiangVien/Get/' + this.ckservice.get('MaGv');
  ngOnInit(): any {
    console.log(this.parameter);
    this.service.Get(this.parameter).subscribe(
      (data) => {
        this.giangvien = data;
        console.log(this.giangvien);
      },
      (error) => {}
    );
  }
}
