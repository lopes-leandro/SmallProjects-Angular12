import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  boxStyles: BoxStyle | null;
  boxForm = new FormGroup({
    size: new FormControl(''),
    borderRadius: new FormControl(''),
    textColor: new FormControl(''),
    backgroundColor: new FormControl('')
  });

  constructor() { 
    this.boxStyles = null;
  }

  ngOnInit(): void {
    this.boxForm.get('size')?.setValue(this.sizeOptions[0]);
    this.boxForm.get('backgroundColor')?.setValue(this.colorOptions[0]);
    this.boxForm.get('textColor')?.setValue(this.colorOptions[1]);
    this.boxForm.get('borderRadius')?.setValue(this.borderRadiusOptions[0]);
    this.applyChanges();
  }

  setBoxStyles(size: string, backgroundColor: string, color: string, borderRadius: string) {
    this.boxStyles = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor,
      color,
      borderRadius: `${borderRadius}px`
    }
  }

  applyChanges() {
    this.setBoxStyles(
      this.boxForm.get('size')?.value,
      this.boxForm.get('backgroundColor')?.value,
      this.boxForm.get('textColor')?.value,
      this.boxForm.get('borderRadius')?.value,
    )
  }

}
