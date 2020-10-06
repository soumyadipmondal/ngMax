import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector:'[DynaComponentPlaceholder]'
})

export class DynaPlaceholderDirective {
    constructor(public vcr: ViewContainerRef){}
}