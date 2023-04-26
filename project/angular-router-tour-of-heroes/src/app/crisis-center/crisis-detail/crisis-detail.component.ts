import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent {

  crisis!: Crisis;
  editName = '';

  constructor(private route : ActivatedRoute, private router: Router, private dialogService : DialogService) {

  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data['crisis'];
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  


}
