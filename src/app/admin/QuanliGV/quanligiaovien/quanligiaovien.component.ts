import { Component, OnInit } from '@angular/core';
import { giaovien } from '../../../model/giaovien';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../../service/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { monhoc } from '../../../model/monhoc';
@Component({
  selector: 'app-quanligiaovien',
  templateUrl: './quanligiaovien.component.html',
  styleUrl: './quanligiaovien.component.css'
})
export class QuanligiaovienComponent implements OnInit{
  search:string="";
  parasearch: string="GiangVien/Search/";
  Gvdata: giaovien[]=[]; 
  newgiaovien: giaovien = new giaovien();
  editMode: boolean[] = [];
  opencreate : boolean = true;
  mon: monhoc[]=[];
  paramater : string="";
  page: number = 1;
  constructor(private service: ServiceService , private cookieService : CookieService){}
  
  ngOnInit(): void {
    this.paramater ="GiangVien/GetAll";
    this.service.Get(this.paramater).subscribe((data: giaovien[]) => {
      this.Gvdata = data; 
    }, err => {
      console.log(err.message);
    }, () => {
      console.log();}
  );
  this.service.Get("HocPhan/getAll").subscribe((data: monhoc[]) => {
    this.mon = data;
  }, err => {
    console.log(err.message);
  }, () => {
    console.log();}
);
  }


  searchds(event : Event){
    this.service.Get(this.parasearch+this.search).subscribe(data=>{
      this.Gvdata=data;
    },(err: HttpErrorResponse)=>{
      if(err.status==404)
        alert("Không tìm thấy");
    }
    )
  }

  open():any{
    this.opencreate = !this.opencreate;
  }

  create():any{
    console.log(this.newgiaovien)
    this.paramater="GiangVien/AddGv";
    this.service.Post(this.paramater, this.newgiaovien).subscribe((res:any)=>{  
      alert("Thêm mới thành công");
      this.reloadPage(); 
    }, err => {
      alert("có lỗi xảy ra vui lòng thử lại")
    }
  );
  }
  toggleEditMode(index: number): void {
    this.editMode[index] = !this.editMode[index];
    console.log(this.Gvdata[index]);
  }
  saveChanges(index: number , body : giaovien): void {

    const id = this.Gvdata[index].maGv;
    this.paramater = "GiangVien/Edit/"+id;
    this.service.Put(this.paramater , body).subscribe(res=>
      {
        alert("Cập nhật thành công")
        this.reloadPage();
      },(error : HttpErrorResponse) =>{
        if(error.status == 400){
          alert("Có lỗi xảy ra");
          return ;
        }
      }
    );
  }

  cancelEdit(index: number ): void {
    this.editMode[index] = false;
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
  confirmDelete(id : string){
    if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản này?')) {
      this.Delete(id);
    } else {
      return;
    }
  }
  
  Delete(id : string){
    this.paramater="GiangVien/DeleteGv";
    this.service.Delete(this.paramater,id).subscribe(res =>{
      alert("Xóa thành công");
      this.reloadPage();
    },(error:HttpErrorResponse)=>{
      if(error.status == 500 || error.status == 404){
        alert("Có Lỗi Xảy ra");
      }
    }
  )
    
  };
}
