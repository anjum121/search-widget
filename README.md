# Auto Search Component using Angular 4 

### About

Component can be used in various application to show auto search behaviour, such as user Search, Phone directory etc. 

## Prerequisite 

You should have latest node installed in your computer.



``` javascript 
 get clone https://github.com/anjum121/search-widget.git
````



For this demo I am using faker.js to generate fake user detials and json-server locally.
you must have json-server running, you can install it via NPM using below command in terminal

``` javascript 
 npm install -g json-server
````
Once you install json-server locally you are good to go. just do ```npm install``` inside cloned project, it will take a while depend on your network speed.

open terminal inside project folder and cd to ```./src/fake-data/``` folder then run ```json-server faker.js``` your fake data server will be up and running.

Open new terminal cd to project and run ```ng serve -o``` it will open appliation. 



### Basic usage in HTML 

``` html 
 <app-user-search [config]="config"></app-user-search>
```

### Base configuration

In you main component file define variable at top level 

``` js 
config: any;

```

After that in constructor define property to 

``` js
    this.config = {
      placeholderText: 'SEARCH (Client Name / Policy Number)' ,
      debouceTiming: '200' // 500 is default
    };
```

### Screen shots

  
   ![alt text][one]
   
   [one]: one.png "One"
   
   
     
   ![alt text][two]
   
   [two]: two.png "Two"



 
### Compatibility
 
 Currently, component supports Google Chrome (tested v37+), Mozilla Firefox (tested 30+), and Internet Explorer. Latest Mobile browsers are tested.
 
 



