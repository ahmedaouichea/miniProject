import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const Material = [MatButtonModule,MatTableModule,MatCardModule,
                MatInputModule,MatIconModule,MatToolbarModule,
                MatDividerModule ,MatSidenavModule,MatSortModule,
                MatPaginatorModule,MatCheckboxModule,MatAutocompleteModule

]

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
