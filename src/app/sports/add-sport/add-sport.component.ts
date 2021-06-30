import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sport } from 'src/app/model/model';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {
  sport: Sport = {} as Sport;
  title = 'Add sport information';
  showProgressBar = false;

  constructor(public dialogRef: MatDialogRef<AddSportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sportService: SportService) { }

  ngOnInit(): void {
    if(this.data.idSport != null) {
      this.title = 'Edit sport information';
  this.sportService.findSportById(this.data.idSport).subscribe(sport => {
    this.sport = sport;
  })
}
  }

  addSport() {
    this.showProgressBar = true;
    if(this.data.idSport != null) {
      this.sportService.editSport(this.sport, this.data.idSport).subscribe(sport => {
        this.sport = sport;
        window.location.reload();
     });
    }
    this.sportService.addSportForGym(this.sport, this.data.id).subscribe(sport => {
       this.sport = sport;
       window.location.reload();
    });
  }


}
