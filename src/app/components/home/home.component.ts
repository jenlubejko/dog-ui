import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'mixed',
    'pit',
    'corgi'
  ];
  dogform: FormGroup;
  validMessage: string = "";

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

}
