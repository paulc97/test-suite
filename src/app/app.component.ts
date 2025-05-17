import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/features/layout/components/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<div class="h-full w-full"><app-layout /></div>`,
  styles: ``,
})
export class AppComponent {
  title = 'test-suite';
}
