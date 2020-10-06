import { Component } from '@angular/compiler/src/core';
import { ComponentFactoryResolver, Injectable , ViewChild, ViewContainerRef} from '@angular/core';

import {LoaderComponent} from '../loader/loader.component';
import { DynaPlaceholderDirective } from './shared-directive.directive';
//import {DynaPlaceholderDirective} from './shared-directive.directive';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  hostPlaceholderRef : ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) { }

  showLoader = (placeDir: DynaPlaceholderDirective, message: string)=>{
    //let placeholderContainer=this.initializeComponent(placeDir, LoaderComponent);
    //placeholderContainer.instance.message = message

    //initializing component using resolve factory
    let loaderFactory = this.cfr.resolveComponentFactory(LoaderComponent);
    //console.log(loaderFactory)
    //Placehodler reference
    this.hostPlaceholderRef = placeDir.vcr;
    this.hostPlaceholderRef.clear();
    //creating the component
    let hostContainer = this.hostPlaceholderRef.createComponent(loaderFactory);
    //Event Binding
    hostContainer.instance.message = message;
    /* hostContainer.instance.close.subscribe(()=>{
      hostPlaceholderRef.clear();
    }) */
  }

  hideLoader = ()=>{
    this.hostPlaceholderRef.clear();
  }

  /* private initializeComponent = (placeDir:DynaPlaceholderDirective, component) => {
    const mYcomponent:`${component}` = component
    //console.log(typeof this.cfr.resolveComponentFactory(component))
    const componentFactoryCreation= this.cfr.resolveComponentFactory(component);
    const placeholderCreation = placeDir.vcr;

    placeholderCreation.clear();
    //console.log( typeof placeholderCreation.createComponent(componentFactoryCreation))
    let placeholderContainer = placeholderCreation.createComponent(componentFactoryCreation);
    //placeholderContainer.
    return placeholderContainer
  }
 */}










//initializing component using resolve factory
    /* let loaderFactory = this.cfr.resolveComponentFactory(LoaderComponent);
    //console.log(loaderFactory)
    //Placehodler reference
    let hostPlaceholderRef = this._placeDir.vcr;
    hostPlaceholderRef.clear();
    //creating the component
    let hostContainer = hostPlaceholderRef.createComponent(loaderFactory);
    //Event Binding */
    //placeholderContainer.instance.message = message;
