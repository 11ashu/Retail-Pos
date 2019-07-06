import {Component, OnDestroy, OnInit} from '@angular/core';
declare var $;
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
        const trees: any = $('[data-widget="tree"]');
        trees.tree();
    });
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

    ngOnDestroy(): void {
        document.body.className = '';
    }

}
