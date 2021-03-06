import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

import { MenuItem } from './menu-item.model';

@Component({
    selector: 'mt-menu-item',
    templateUrl: './menu-item.component.html',
    animations: [
        trigger('menu-item-appeared', [
            state('ready', style({ opacity: 1 })),
            transition('void => ready', [
                style({ opacity: 0, transform: 'translateY(-20px)' }),
                animate('500ms 0s ease-in')
            ])
        ])
    ]
})
export class MenuItemComponent implements OnInit {

    menuItemState = 'ready';
    @Input() menuItem: MenuItem;
    @Output() addEvt = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    emitAddEvent() {
        this.addEvt.emit(this.menuItem);
    }
}
