import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddArbitrateSportComponent } from 'src/app/arbitrates/add-arbitrate-sport/add-arbitrate-sport.component';
import { AddArbitrateComponent } from 'src/app/arbitrates/add-arbitrate/add-arbitrate.component';
import { Arbitrate, Sport, SportsMan, Train, User, Worktime } from 'src/app/model/model';
import { ArbitrateService } from 'src/app/service/arbitrate.service';
import { SportService } from 'src/app/service/sport.service';
import { StorageService } from 'src/app/service/storage.service';
import { TrainService } from 'src/app/service/train.service';
import { WorktimeService } from 'src/app/service/worktime.service';
import { AddSportComponent } from 'src/app/sports/add-sport/add-sport.component';
import { DisplaySportComponent } from 'src/app/sports/display-sport/display-sport.component';
import { AddSportsManComponent } from 'src/app/sportsMan/add-sports-man/add-sports-man.component';
import { DisplaySportsManComponent } from 'src/app/sportsMan/display-sports-man/display-sports-man.component';
import { AddTrainSportComponent } from 'src/app/trains/add-train-sport/add-train-sport.component';
import { AddTrainComponent } from 'src/app/trains/add-train/add-train.component';
import { AddWorktimeComponent } from '../add-worktime/add-worktime.component';

@Component({
  selector: 'app-find-all-worktime',
  templateUrl: './find-all-worktime.component.html',
  styleUrls: ['./find-all-worktime.component.css']
})
export class FindAllWorktimeComponent implements OnInit {

  user: User = {} as User;
  id: number= 0;
  worktimes: Worktime[]=[];
  sportsMan: SportsMan[]=[];
  sportsManLength: number=0;
  sports: Sport[]=[];
  trains: Train[] =[];
  arbitrates: Arbitrate[]=[];
  idGym: number=0;

  constructor(private storageService: StorageService, private dialog: MatDialog, private sportService: SportService,
    private route: ActivatedRoute, private worktimeService: WorktimeService, private trainsService: TrainService,
    private arbitrateService: ArbitrateService) {
      this.route.params.subscribe(
        params => {
          this.id = this.route.snapshot.params.id;
          this.idGym = this.route.snapshot.parent?.params.id;
          this.worktimeService.findWorktimesForGym(this.id).subscribe(worktimes => {
            this.worktimes = worktimes;
          });
          this.storageService.findUserByUsername(this.storageService.getUsername()).subscribe(user => {
            this.user = user;
          });
          this.sportService.findSportsForGym(this.id).subscribe(sports => {
            this.sports = sports;
          });
          this.trainsService.findTrainsForGym(this.idGym).subscribe(trains => {
            this.trains = trains;
          });
          this.arbitrateService.findArbitratesForGym(this.idGym).subscribe(arbitrates => {
            this.arbitrates = arbitrates;
          });
        }
      )
    }

  ngOnInit(): void {
  }
  showSportsMan(id: number, idGym: number) {
    const dialogRef = this.dialog.open(DisplaySportsManComponent, {
      width: '800px',
      data: {id, idGym}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openAddWorktime(id: number): void {
    console.log(id)
    const dialogRef = this.dialog.open(AddWorktimeComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openEditWorktime(idWorktime: number, idGym: number): void {
    const dialogRef = this.dialog.open(AddWorktimeComponent, {
      width: '400px',
      data: {idWorktime, idGym}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  deleteWorktime(id: number) {
    if(confirm('Are you sure')) {
      this.worktimeService.deleteWorktime(id).subscribe(() => {
        window.location.reload();
      })
    }
  }

  openAddSportsMan(id: number): void {
    const dialogRef = this.dialog.open(AddSportsManComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  addSportForGym(id: number) {
    const dialogRef = this.dialog.open(AddSportComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  editSport(idSport: number) {
    const dialogRef = this.dialog.open(AddSportComponent, {
      width: '400px',
      data: {idSport}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  deleteSport(id: number, idGym:number) {
       if(confirm('Are you sure')) {
         this.sportService.deleteSportFromGym(id, idGym).subscribe(() => {
           window.location.reload();
         });
       }
  }

  addArbitrate(id: number) {
    const dialogRef = this.dialog.open(AddArbitrateComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  addTrain(id: number) {
    const dialogRef = this.dialog.open(AddTrainComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  editTrain(idTrain: number) {
    const dialogRef = this.dialog.open(AddTrainComponent, {
      width: '400px',
      data: {idTrain}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  deleteTrain(id: number) {
    if(confirm('Are you sure')) {
        this.trainsService.deleteTrain(id).subscribe(() => {
          window.location.reload();
        });
    }
  }
  deleteArbitrate(id: number) {
      if(confirm('Are you sure')) {
        this.arbitrateService.deleteArbitrate(id).subscribe(() => {
          window.location.reload();
        });
      }
  }
  editArbitrate(idArbitrate: number) {
    const dialogRef = this.dialog.open(AddArbitrateComponent, {
      width: '400px',
      data: {idArbitrate}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  addTrainForSport(id: number) {
    const dialogRef = this.dialog.open(AddTrainSportComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  addTrainForArbitrate(id: number) {
    const dialogRef = this.dialog.open(AddArbitrateSportComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  displaySport(id: number) {
    const dialogRef = this.dialog.open(DisplaySportComponent, {
      width: '400px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
