import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsterPageRoutingModule } from './monster-routing.module';

import { MonsterPage } from './monster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsterPageRoutingModule
  ],
  declarations: [MonsterPage]
})
export class MonsterPageModule {}
