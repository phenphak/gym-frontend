import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gym, User } from 'src/app/model/model';
import { GymService } from 'src/app/service/gym.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms : Gym[] = [] ;
  user : User = {} as User;
  username :any;
  constructor(private gymService :GymService,
              private router : Router,
              private storageService :StorageService,
              private route : ActivatedRoute) {
                this.route.params.subscribe(params =>{
                  this.username=this.storageService.getUsername();
                  this.storageService.findUserByUsername(this.username).subscribe(user=>{
                    this.user=user;
                  });
                })
              }

  ngOnInit(): void {
    this.gymService.findAllGym().subscribe(gyms => {
      this.gyms = gyms;
    })
  }

  logout(id:number){
    this.storageService.singout();
    this.router.navigateByUrl('/login');
    this.storageService.deleteUser(id).subscribe();
  }

}
