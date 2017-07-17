import {Component, ElementRef, Inject, Input, AfterContentInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-user-search',
  host: {
    '(document:click)': 'checkIfUserClickedOutSide($event)',
  },
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})


export class UserSearchComponent implements AfterContentInit {

  @Input() config;

  searchField: FormControl;
  userSearchForm: FormGroup;
  results: any = [];
  myElementRef;


  constructor(private userServiceService: UserServiceService,
              private formBuilder: FormBuilder,
              private elementRef: ElementRef) {


  }


  init() {
    this.searchField = new FormControl();
    this.userSearchForm = this.formBuilder.group({search: this.searchField});

    this.searchField.valueChanges
      .debounceTime(this.config.debouceTiming)
      .switchMap(term => this.userServiceService.getUsers(term))
      .subscribe(result => {
        this.results = result.json();
      });

    console.log(this.results);
  }


  setDefaultOptions() {
    this.config.placeholderText = this.config.placeholderText || 'Search...';
    this.config.debouceTiming = this.config.debouceTiming || 500;
  }

  /*

   */
  ngAfterContentInit() {
    this.myElementRef = this.elementRef;
    this.setDefaultOptions();
    this.init();
  }


  /*
   check if user has clicked outside of search component area, if use clear search result
   */

  checkIfUserClickedOutSide(e) {
    let searchComponent = e.target;
    let withInComponent = false;

    do {
      if (searchComponent === this.elementRef.nativeElement) {
        withInComponent = true;
      }
      searchComponent = searchComponent.parentNode;
    } while (searchComponent);
    if (!withInComponent) {
      this.results = [];
    }
  }

}
