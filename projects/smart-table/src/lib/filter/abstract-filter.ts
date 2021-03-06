import { EventEmitter, Input, Output } from '@angular/core';

import { SmartTableFilter, UpdateFilterArgs } from './../smart-table/smart-table.types';

export abstract class AbstractFilter {
    @Input() filter: SmartTableFilter;
    @Input() optional = false;
    @Output() update = new EventEmitter<UpdateFilterArgs>();

    public id: string;
    public value: string;

    public onFilter(value) {
        this.filter.value = value;
        this.update.emit({ filter: this.filter, value });
    }
}
