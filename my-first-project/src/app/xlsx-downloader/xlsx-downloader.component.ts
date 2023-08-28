import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xlsx-downloader',
  templateUrl: './xlsx-downloader.component.html',
  styleUrls: ['./xlsx-downloader.component.css']
})
export class XlsxDownloaderComponent {

  constructor() { }

  downloadXlsx(): void {
    const data = [
      { name: 'Jhon', age: 20 },
      { name: 'Jane', age: 24 },
      { name: 'Janet', age: 22 },
    ];
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1');
    XLSX.writeFile(workBook, 'sample.xlsx');
  }
}
