import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  outputs: ['list'],
})

export class AppComponent {
  title = 'Amazon Re-Ocurring Purchases';
  public list: any[] = [{ item: 'laundry detergent' },
                        { item: 'batteries' },
                        { item: 'supplements' }];
}
