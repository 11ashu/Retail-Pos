import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
      $('#example2').DataTable({
        'paging': true,
        'lengthChange': true,
        'searching': true,
        'ordering': true,
        'info': true,
        'autoWidth': true
      });
    });
  }

}
