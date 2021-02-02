import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoffeePreferenceService } from '../services/coffee-preference.service';

@Component({
  selector: 'app-edit-preference',
  templateUrl: './edit-preference.page.html',
  styleUrls: ['./edit-preference.page.scss'],
})
export class EditPreferencePage implements OnInit {
  updatePreferenceForm: FormGroup;
  id: any;

  constructor
  (
    private coffeePref: CoffeePreferenceService,
    private actRoute: ActivatedRoute,
    private route: Router,
    public fb: FormBuilder
  )
  {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.coffeePref.getPreference(this.id).valueChanges().subscribe(result => {
      this.updatePreferenceForm.setValue(result);
    });
  }

  ngOnInit() {
    this.updatePreferenceForm = this.fb.group({
      preferenceName: [''],
      countryName: [''],
      cityName: [''],
      coffeeType: ['']
    })
    console.log(this.updatePreferenceForm.value);
  }

  updateForm() {
    this.coffeePref.updatePreference(this.id, this.updatePreferenceForm.value)
      .then(() => {
        this.route.navigate(['/preferences']);
      })
      .catch(error => console.log(error));
  }
}
