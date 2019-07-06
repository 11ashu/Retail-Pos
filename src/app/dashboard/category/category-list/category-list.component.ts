import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

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
