import { trigger, style, animate, transition } from '@angular/animations';

export const routeTrans = trigger(
  'routeTrans',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ])
  ]);
