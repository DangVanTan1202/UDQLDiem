import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/Login/login/login.component';
import { LayoutComponent } from './admin/Layout/layout/layout.component';
import { QuanlidiemComponent } from './admin/quanlidiem/quanlidiem/quanlidiem.component';
import { HomeComponent } from './admin/home/home.component';
import { ThongtinComponent } from './admin/thongtin/thongtin.component';
import { CookieService } from 'ngx-cookie-service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { QuanlisinhvienComponent } from './admin/quanlisinhvien/quanlisinhvien/quanlisinhvien.component';
import { QuanliaccountComponent } from './admin/quanlitaikhoan/quanliaccount/quanliaccount.component';
import { QuanligiaovienComponent } from './admin/QuanliGV/quanligiaovien/quanligiaovien.component';
import{NgxPaginationModule } from 'ngx-pagination';
import { HistoryComponent } from './admin/History/history/history.component';
import { QuanlihocphanComponent } from './admin/quanlihocphan/quanlihocphan/quanlihocphan.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    QuanlidiemComponent,
    QuanlisinhvienComponent,
    QuanliaccountComponent,
    QuanligiaovienComponent,
    HomeComponent,
    ThongtinComponent,
    HistoryComponent,
      QuanlihocphanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ServiceService,
    CookieService ,
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }