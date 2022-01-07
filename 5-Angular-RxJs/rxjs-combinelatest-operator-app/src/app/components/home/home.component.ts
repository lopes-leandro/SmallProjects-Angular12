import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

interface BoxStyle {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  borderRadius: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557', '#2a9d8f', '#fb8500'];
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];
  boxStyles$: Observable<BoxStyle> | null;
  boxForm = new FormGroup({
    size: new FormControl(''),
    borderRadius: new FormControl(''),
    textColor: new FormControl(''),
    backgroundColor: new FormControl('')
  });

  constructor() {
    this.boxStyles$ = null;
  }

  ngOnInit(): void {
    this.boxForm.get('size')?.setValue(this.sizeOptions[0]);
    this.boxForm.get('backgroundColor')?.setValue(this.colorOptions[0]);
    this.boxForm.get('textColor')?.setValue(this.colorOptions[1]);
    this.boxForm.get('borderRadius')?.setValue(this.borderRadiusOptions[0]);
    this.listenToInputChanges();
  }


  listenToInputChanges() {
    this.boxStyles$ = combineLatest([
      this.boxForm.get('size')?.valueChanges.pipe(startWith(this.sizeOptions[0])),
      this.boxForm.get('borderRadius')?.valueChanges.pipe(startWith(this.borderRadiusOptions[0])),
      this.boxForm.get('backgroundColor')?.valueChanges.pipe(startWith(this.colorOptions[0])),
      this.boxForm.get('textColor')?.valueChanges.pipe(startWith(this.colorOptions[1])),
    ])
      .pipe(
        map(([size, borderRadius, backgroundColor, textColor]: any) => {
          return {
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor,
            color: textColor,
            borderRadius: `${borderRadius}px`,
          }
        })
      );
  }

}
