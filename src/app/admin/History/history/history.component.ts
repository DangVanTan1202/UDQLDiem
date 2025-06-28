import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { CookieService } from 'ngx-cookie-service';
import { history } from '../../../model/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  page: number = 1;
  lichsu : history[]=[];
  search:string="";
  paramater: string="History/get/";
  constructor(private service : ServiceService , private cookieservice : CookieService){}
  ngOnInit(): void {
    this.service.Get("History/get").subscribe(res=>{
      this.lichsu =res;
    },err=>{

    }
  )
  }
  deleteall(){
    if(window.confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách không")){
      this.paramater="History/deleteall";
      this.service.Delete(this.paramater,"").subscribe();
      alert("Xóa thành công");
      window.location.reload();
    }
    else return;
  }
  delete(id:number){
    if(window.confirm("Bạn có chắc chắn muốn xóa không")){
      this.paramater="History/delete";
      this.service.Delete(this.paramater,id.toString()).subscribe();
      alert("Xóa thành công");
      window.location.reload();
    }
    else return;
  }
  searchds(event : Event){
    this.service.Get(this.paramater+this.search).subscribe(data=>{
      this.lichsu=data;
    },err=>{      
        alert("Có lỗi xảy ra");
    }
    )
  }
}
