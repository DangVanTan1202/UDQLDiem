import { Component, OnInit } from '@angular/core';
import { monhoc } from '../../../model/monhoc';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-quanlihocphan',
  templateUrl: './quanlihocphan.component.html',
  styleUrls: ['./quanlihocphan.component.css']
})
export class QuanlihocphanComponent implements OnInit {
  dsHocPhan: monhoc[] = [];
  monhoc: monhoc = new monhoc();
  isEdit: boolean = false;
  showForm: boolean = false; // Hiển thị form popup

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.loadHocPhan();
  }

  // Load tất cả học phần
  loadHocPhan() {
    this.service.Get("HocPhan/getAll").subscribe(
      (res: monhoc[]) => {
        this.dsHocPhan = res;
      },
      err => {
        console.error("Lỗi khi tải học phần", err);
      }
    );
  }

  // Mở form thêm mới
  openForm() {
    this.resetForm();
    this.showForm = true;
  }

  // Mở form chỉnh sửa
  edit(hp: monhoc) {
    this.monhoc = { ...hp };
    this.isEdit = true;
    this.showForm = true;
  }

  // Đóng form
  closeForm() {
    this.showForm = false;
  }

  // Gửi form để thêm hoặc cập nhật
  submitForm() {
    console.log("Dữ liệu gửi lên backend:", this.monhoc);

    if (this.isEdit) {
      this.service.Put(`HocPhan/${this.monhoc.maHp}`, this.monhoc).subscribe(
        res => {
          alert("Cập nhật thành công");
          this.resetForm();
          this.showForm = false;
          this.loadHocPhan();
        },
        err => {
          alert("Lỗi khi cập nhật");
          console.error(err);
        }
      );
    } else {
      this.service.Post("HocPhan/them", this.monhoc).subscribe(
        res => {
          if (res === "Học phần này đã tồn tại") {
            alert("Học phần đã tồn tại");
          } else {
            alert("Thêm thành công");
            this.resetForm();
            this.showForm = false;
            this.loadHocPhan();
          }
        },
        err => {
          alert("Lỗi khi thêm học phần");
          console.error(err);
        }
      );
    }
  }

  // Xóa học phần
  xoa(maHp: string) {
    if (confirm("Bạn có chắc chắn muốn xóa học phần này không?")) {
      this.service.Delete("HocPhan/delete", maHp).subscribe(
        () => {
          alert("Xóa thành công");
          this.loadHocPhan();
        },
        err => {
          alert("Lỗi khi xóa học phần");
          console.error(err);
        }
      );
    }
  }

  // Reset lại form và trạng thái
  resetForm() {
    this.monhoc = new monhoc();
    this.isEdit = false;
  }
}
