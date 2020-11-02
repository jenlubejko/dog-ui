import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ages: string[] = [
    'puppy',
    'juvenile',
    'adult'
  ];
  dogForm: FormGroup;
  validMessage: string = "";

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogForm = new FormGroup({
      name: new FormControl('', Validators.required),
      identification: new FormControl('', Validators.required),
      breed: new FormControl('', Validators.required),
      origin: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      intake_date: new FormControl('', Validators.required),
      reproductive: new FormControl('', Validators.required)
    });
  }

  submitDogInformation() {

    if (this.dogForm.valid) {
      this.validMessage = "This dog's information has been submitted!";
      this.dogService.createDogInformation(this.dogForm.value).subscribe(
        data => {
          this.dogForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the entire form!";
    }
  }
}
