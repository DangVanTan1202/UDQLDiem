import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/Login/login/login.component';
import { LayoutComponent } from './admin/Layout/layout/layout.component';
import { QuanlidiemComponent } from './admin/quanlidiem/quanlidiem/quanlidiem.component';
import { HomeComponent } from './admin/home/home.component';
import { ThongtinComponent } from './admin/thongtin/thongtin.component';
import { QuanlisinhvienComponent } from './admin/quanlisinhvien/quanlisinhvien/quanlisinhvien.component';
import { QuanligiaovienComponent } from './admin/QuanliGV/quanligiaovien/quanligiaovien.component';
import { QuanliaccountComponent } from './admin/quanlitaikhoan/quanliaccount/quanliaccount.component';
import { HistoryComponent } from './admin/History/history/history.component';
import { QuanlihocphanComponent } from './admin/quanlihocphan/quanlihocphan/quanlihocphan.component';
const routes: Routes = [
  {path :'' , redirectTo: 'login' , pathMatch:'full'},
  {path:'login' , component : LoginComponent},
  
  {
    path:'' , component: LayoutComponent,
    children:[
      {
        path : 'trangchu', 
        component:HomeComponent
      },
      {
        path: 'Quanlidiem',
        component: QuanlidiemComponent
      },
      {
        path :'Quanlisinhvien',
        component: QuanlisinhvienComponent
      },
      {
        path: 'Thongtin',
        component: ThongtinComponent
      },
      {
        path: "Quanligiaovien",
        component : QuanligiaovienComponent
      },
      {
        path:"History",
        component: HistoryComponent
      },
      {
        path:"Quanlitk",
        component: QuanliaccountComponent
      },
      {
  path: 'Quanlihocphan',
  component: QuanlihocphanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
