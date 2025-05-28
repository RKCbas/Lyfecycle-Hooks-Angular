import { ChangeDetectionStrategy, Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input.required<string>();


  ngOnChanges(changes: SimpleChanges) {

    console.log('onChanges')

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} = ${inputValues.previousValue}`);
      console.log(`Current ${inputName} = ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change = ${inputValues.firstChange}`);
    }
  }

}
