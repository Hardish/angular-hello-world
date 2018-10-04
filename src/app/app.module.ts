/*
1. Declrations:
        declration specifies the components that are defined in this module.
        you have to declare components in a NgModule before you can use them in your templates.

        you may have notices that when we used ng generate, the tool automatically added our components to this declration list. The idea is that when we generated a new component, the ng tool assumed we wanted it to belong to the current NgModule.
2. imports:
        imports describes which dependencies this module has. We are creating a browser app , so we want to import BrowserModule.

        you put something in your NgModule imports if you are going to be using it in your templates or with dependency injection.

3.  Providers:
        providers are used for Dependency Injection.So to make service available to be injected throughout our application.

4.   bootstrap:
        bootstrap tells anguler that when this module used to bootstrap app.we need to load the AppComponent component as the top level component.



*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
//@ngModule is add metadata to the class immediately follwing.
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
