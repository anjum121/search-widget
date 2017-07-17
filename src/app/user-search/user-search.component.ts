import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})


export class UserSearchComponent implements OnInit {


  searchField: FormControl;
  userSearchForm: FormGroup;
  results: any;


  constructor(private userServiceService: UserServiceService,
              private formBuilder: FormBuilder) {

    this.init();

  }

  init() {
    this.searchField = new FormControl();
    this.userSearchForm = this.formBuilder.group({search: this.searchField});

    this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(term => this.userServiceService.getUsers(term))
      .subscribe(result => {
        this.results = result.json();
      });

    console.log(this.results);
  }

  ngOnInit() {
  }

}
