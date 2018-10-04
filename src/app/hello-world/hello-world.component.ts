/*
if we want to teach our browser new tags, like <weather> that shows weather,<login> that shows login panel then Component is fundamental idea behind it. we will teach browser new tags apart from <select>, <form> which have custom functionality attached to them.
ex. this hello-world Component will help us to write
<app-hello-wold></app-hello-wolrd> in .html file
--------------------------------------------
to create component :
1.go till main folder like here angular-hello-world in cmd
2. write ng g c hello-wold(component name)
-------------------------------------------
how to we defined our new Component. A basic Component have 2 parts
      1. A Component decoration
      2. A Component defination class 
 <NOTE:> the typescript file is end with .ts insted of .js.
  browser dont know .ts so ng serve command live compiles our .ts to .js
---------------------------------------------
Component, OnInit are dependency object and compiler find them from @angular/core
moreover OnInit helps us to run code when we initialize the component.

import { things } from whenever where 'things' is doing destructing. destructing feature provide by typescript and ES6. 
*/
import { Component, OnInit } from '@angular/core';
/* this is component decorators
decorators means we are adding metadata to our code
when we are using @Component on the HelloWorld class , we are actually "decorating" HelloWorld as a component
*/
@Component({
  /**
   * we want to be able to use this Component in our markup language using a <app-hello-world> tag. 
   * to do that , we configure the @Component and specify the selector as app-hello-world
   * angular have bit same syntax for selector as CSS but few are differnt
   */
  selector: 'app-hello-world',
  /*
  *we will load our template from the file hello-world.component.html in the same directory as our component.
  * we can defined template using two ways.
  *   1. template key in our @component object
  *   2. templateUrk
  *   we could add templte to our @component by passing the template option:
      @component({
        selector: 'app-hello-world'.
        template: `
          <p>
              hello-world works!
          </p>
          `
          ---> we are usinfg backticks(`...`)
          this is new feature of ES6 which allows us to use multiple strings.
      })

  */
  templateUrl: './hello-world.component.html',
  /*
  *styleUrls says that we want to use CSS in the file hello-world.component.css as the style for the component
  * angular uses a concept called "style-encapsulation" which means that style specified for a purticular component,only apply to that component
  */
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*
till now we just created component but not used it hence no change in the webpage.
but to use the <app-hello-world> </app-hello-world> go to app.component.html in app folder
*/