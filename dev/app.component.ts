import {Component} from 'angular2/core';
import {ReversePipe} from './reverse.pipe';

@Component({
    selector: 'app',
    template: `
        <h1>Angular2 - Pipes</h1>
        <section class="pipe">
            <h2>The Date Pipe</h2>
            <p>Today is: {{today | date:'longDate'}}</p>
        </section>
        <section class="pipe">
            <h2>The lowercase and UPPERCASE Pipe</h2>
            <input type="text" #inputCasePipes (keyup)="0"><br>
            <div>Output Lowercase: {{inputCasePipes.value | lowercase}}</div>
            <div>Output Uppercase: {{inputCasePipes.value | uppercase}}</div>
        </section>

        <section class="pipe">
            <h2>The Slice Pipe</h2>
            <input type="text" #inputSlicePipe (keyup)="0" (keyup)="0"> - from <input type="text" #start (keyup)="0">
            to <input type="text" #end (keyup)="0"><br>
            <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>
        </section>

        <section class="pipe">
            <h2>Number Pipes</h2>
            <input type="text" #inputNumberPipes (keyup)="0"> - currency: <input type="text" #currency value="EUR" (change)="0">
            <br>
            <div>Decimal: {{1.0 * inputNumberPipes.value | number:'2.2-2' }}</div>
            <div>Currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2' }}</div>
            <input type="checkbox" #currencyShort checked (change)="0">Short currency code
        </section>

        <section class="pipe">
            <h2>Chaining multiple Pipes (e.g. uppercase and slice)</h2>
            <input type="text" #inputChainPipes (keyup)="0"><br>
            <div>Output: {{inputChainPipes.value | slice:1-3 | uppercase}}</div>
        </section>

        <section class="pipe">
            <h2>Custom Pipe (reverse string) pipes</h2>
            <input type="text" #inputCustomPipe (keyup)="0"><br>
            <div>Output: {{inputCustomPipe.value | myReversePipe }} </div>
        </section>

        <section class="pipe">
            <h2>Async (stateful) pipes</h2><br>
            <div>Output (received after 2s): {{statefulPipeOutput | async}} </div>
        </section>
    `,
    pipes: [ReversePipe]

})
export class AppComponent {
      today = new Date();

      statefulPipeOutput = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data is there!'), 2000);
  });
}
