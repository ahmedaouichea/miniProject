import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

const Material = [MatButtonModule,MatTableModule,MatCardModule,MatInputModule,MatIconModule,MatToolbarModule]

@NgModule({
  declarations: [

  ],
  imports: [
    Material
  ],
  exports:[
    Material
  ]
})
export class MaterialModule { }
