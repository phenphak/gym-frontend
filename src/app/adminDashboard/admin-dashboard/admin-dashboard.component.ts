import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gym, SportsMan, Train, User } from 'src/app/model/model';
import { GymService } from 'src/app/service/gym.service';
import { SportsManService } from 'src/app/service/sports-man.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit {

  gym: Gym = {} as Gym;
  user: User = {} as User;
  sportsMan: SportsMan = {} as SportsMan;
  train: Train = {} as Train;
  showProgressBar = false;
  username: string ='';
  gender: any = {};

  constructor(private router: Router, private gymService: GymService,
    private route: ActivatedRoute, private storageService: StorageService,
    private sportsManService: SportsManService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params.username;
    this.storageService.findUserByUsername(this.username).subscribe(user => {
      this.user = user;

  });
  }
  setGender() {
    this.sportsMan.sex = this.gender;
   }
   addSportsMan() {
    this.showProgressBar = true;
     this.sportsManService.addSportsMan(this.sportsMan, 1).subscribe(sportsMan => {
       this.sportsMan = sportsMan;
       window.location.reload();
     });
   }
  addGym() {
    this.showProgressBar = true;
    this.gymService.addGym(this.gym).subscribe(gym => {
      this.gym = gym;
      window.location.reload();
    })
  }

  home() {
    window.location.replace(`/home/${this.username}`);
  }

  logout(id: number) {
   this.storageService.singout();
   this.router.navigateByUrl('/login');
   this.storageService.deleteUser(id).subscribe();
  }
}
