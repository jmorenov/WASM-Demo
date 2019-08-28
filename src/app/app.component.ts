import {AfterViewInit, Component} from '@angular/core';
import { WasmService } from './wasm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'WASM-Demo';
  factorialValue: number;
  factorialInput: number;

  constructor(private readonly wasmService: WasmService) {}

  ngAfterViewInit(): void {
    this.wasmService.factorial(this.factorialInput).subscribe((valueResult: number) => {
      this.factorialValue = valueResult;
    });
  }
}
