import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';


import { IonicModule } from '@ionic/angular';

import { CameraPreviewPageRoutingModule } from './camera-preview-routing.module';

import { CameraPreviewPage } from './camera-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPreviewPageRoutingModule
  ],
  declarations: [CameraPreviewPage],
  providers: [CameraPreview]
})
export class CameraPreviewPageModule {}
