import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { LoaitinComponent } from './loaitin/loaitin.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { SanphamComponent } from './sanpham/sanpham.component';



const routes: Routes = [
  { path: "loaisanpham", component: LoaisanphamComponent },
  { path: "nhacungcap", component: NhacungcapComponent },
  { path: "loaitin", component: LoaitinComponent },
  { path: 'sanpham', component: SanphamComponent },
  { path: 'banner', component: BannerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
