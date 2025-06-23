import { Component, OnInit } from '@angular/core';
import { account } from '../../../model/taikhoan';
import { ServiceService } from '../../../service/service.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quanliaccount',
  templateUrl: './quanliaccount.component.html',
  styleUrl: './quanliaccount.component.css'
})
export class QuanliaccountComponent implements OnInit{
  accountData: account[]=[]; 
  
  editMode: boolean[] = [];
  constructor(private service: ServiceService , private cookieService : CookieService ) { }
  paramater : any ;
  name: string="";
  getType: any ;
  opencreate : boolean = true;
  newaccout :account = new account();
  page: number = 1;
  ngOnInit(): any {
    this.name = this.cookieService.get("Loai");
    this.paramater ="Account/GetAllAcount";
    this.service.Get(this.paramater).subscribe((data: account[]) => {
      this.accountData = data; 
    }, err => {
      console.log(err.message);
    }, () => {
      console.log();}
  );
  }
  toggleEditMode(index: number , loai: boolean): void {
    this.getType = loai;
    this.editMode[index] = !this.editMode[index];
    console.log(this.accountData[index]);
  }
  saveChanges(index: number , body : account , type : string): void {
    if(body.matKhau.trim()==""){
      alert("Vui lòng điền mật khẩu");
      return;
    }
    const id = this.accountData[index].maGv;
    this.paramater ="Account/Edit";
    console.log(body , type)
    if(type == 'true'){
      body.loai = true;
    }
    else if(type =='false'){
      body.loai = false;
    }
    this.service.Put(this.paramater , body).subscribe(res=>{
      alert("Cập nhật tài khoản thành công");
      this.reloadPage();
    }, err=>{
      alert ("Có lỗi xảy ra");
    }
  );
    this.editMode[index] = false;
    
  }
  cancelEdit(index: number ): void {

    this.editMode[index] = false;
    this.reloadPage();
  }
  open():any{
    this.opencreate = !this.opencreate;
  }
  reloadPage(): void {
    window.location.reload();
  }

  create(getType : any ){
    console.log(this.newaccout);
    if(getType == null|| this.newaccout.maGv.trim()== '' || this.newaccout.matKhau.trim()==''){
      alert("Vui Lòng điền đầy đủ thông tin");
      return ;
    }
    if(getType== "true"){
      this.newaccout.loai= true;
    }
    else if(getType =="false"){
      this.newaccout.loai= false;
    }
    this.paramater="Account/Create";
    
    this.service.Post(this.paramater ,this.newaccout).subscribe(res=>{
      alert("Thêm thành công tài khoản ");
      this.reloadPage();
    },(error :HttpErrorResponse)=>{
      alert("Có lỗi xảy ra vui lòng kiểm tra lại");
    }
    );
  }

}
