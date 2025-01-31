import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-sliders',
  imports: [
    MatSliderModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule

  ],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SlidersComponent {
  formatLabel(value: number): string {
    return `${value}`;
  }
  accordion = viewChild.required(MatAccordion);

}
