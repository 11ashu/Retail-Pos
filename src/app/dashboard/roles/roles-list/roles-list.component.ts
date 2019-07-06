import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

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
