import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public dogs;

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getDogs().subscribe(
      data => { this.dogs=data },
      err => console.error(err),
      () => console.log('dogs loaded!')
    );
  }

}
