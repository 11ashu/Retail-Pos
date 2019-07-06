import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-openinghours-list',
  templateUrl: './openinghours-list.component.html',
  styleUrls: ['./openinghours-list.component.scss']
})
export class OpeninghoursListComponent implements OnInit {

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
