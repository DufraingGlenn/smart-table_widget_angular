import { Component } from '@angular/core';
import { AppRatingComponent } from './rating.component';
import { SmartTableConfig } from 'projects/smart-table/src/lib/smart-table/smart-table.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';

  moviesCustomColumns = [{
    name: 'rating',
    component: AppRatingComponent
  }];

  customConfiguration = {
    options: {
      persistTableConfig: true,
      storageIdentifier: 'test-tc',
      translations: {
        moreFilters: 'Meer filters',
        export: 'Export',
        apply: 'Toepassen'
      }
    }
  };

  onRowClicked(row) {
    console.log('clicked row', row);
  }
}
