import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <div style="display:flex;min-height:100vh;align-items:center;justify-content:center;background:#fff;">
      <h1>Hello World</h1>
    </div>
  `,
})
export class HelloComponent {}
