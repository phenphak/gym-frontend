import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Gym, User } from 'src/app/model/model';
import { GymService } from 'src/app/service/gym.service';
import { StorageService } from 'src/app/service/storage.service';
import { EditGymComponent } from '../edit-gym/edit-gym.component';

@Component({
  selector: 'app-find-all-gyms',
  templateUrl: './find-all-gyms.component.html',
  styleUrls: ['./find-all-gyms.component.css']
})
export class FindAllGymsComponent implements OnInit {

  gym: Gym = {} as Gym;
  user: User = {} as User;
  id: any;
  username: any;

  constructor(private route: ActivatedRoute, private gymService: GymService,
    private storageService: StorageService,  public dialog: MatDialog) {
      this.route.params.subscribe(
        params => {
            this.username = this.storageService.getUsername();
            this.id = this.route.snapshot.params.id;
            this.storageService.findUserByUsername(this.username).subscribe(user => {
                this.user = user;
            });
            this.gymService.findGymById(this.id).subscribe(gym => {
              this.gym = gym;
            });
      }
      )
     }

  ngOnInit(): void {
  }

  openEditFindGym(id :number){
     const dialogRef =this.dialog.open(EditGymComponent,{
       width :  '400px',
       data : {id}
     });
     dialogRef.afterClosed().subscribe(()=>{

     });
  }

  deleteGym(id: number) {
    if(confirm('Are you sure')) {
      this.gymService.deleteGym(id).subscribe(() => {
        window.location.replace(`/home/${this.username}`);
      });
    }
  }

}
