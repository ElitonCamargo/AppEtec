import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoulPageRoutingModule } from './soul-routing.module';

import { SoulPage } from './soul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoulPageRoutingModule
  ],
  declarations: [SoulPage]
})
export class SoulPageModule {}
