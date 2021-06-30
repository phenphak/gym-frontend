import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sport } from 'src/app/model/model';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-add-sports-sportsman',
  templateUrl: './add-sports-sportsman.component.html',
  styleUrls: ['./add-sports-sportsman.component.css']
})
export class AddSportsSportsmanComponent implements OnInit {

  sports: Sport[] =[];
  filterSports: Sport[] =[];

  constructor(public dialogRef: MatDialogRef<AddSportsSportsmanComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any, private sportService: SportService) { }

  ngOnInit(): void {
    this.sportService.findSportsForGym(this.data.idGym).subscribe(sports => {
      this.sports = sports;
      this.sportService.findSportsForSportsMan(this.data.id).subscribe(data => {
        this.filterSports = data;
        this.filterSports.forEach(s => {
          this.sports = this.sports.filter(item => item.id !== s.id);
        });
      });
    });
  }

  selectedValue(event :any){
    const idSportMan = event.value;
    this.sportService.addSportForSportsMan(idSportMan, this.data.id).subscribe(() => {
    window.location.reload();
    });
  }

}
