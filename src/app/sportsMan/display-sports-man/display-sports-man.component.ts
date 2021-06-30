import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment, Sport, SportsMan, User } from 'src/app/model/model';
import { AddPaymentComponent } from 'src/app/payments/add-payment/add-payment.component';
import { PaymentService } from 'src/app/service/payment.service';
import { SportService } from 'src/app/service/sport.service';
import { SportsManService } from 'src/app/service/sports-man.service';
import { StorageService } from 'src/app/service/storage.service';
import { WorktimeService } from 'src/app/service/worktime.service';
import { AddSportsSportsmanComponent } from 'src/app/sports/add-sports-sportsman/add-sports-sportsman.component';

@Component({
  selector: 'app-display-sports-man',
  templateUrl: './display-sports-man.component.html',
  styleUrls: ['./display-sports-man.component.css']
})
export class DisplaySportsManComponent implements OnInit {

  sportsMan: SportsMan[] =[];
  user: User = {} as User;
  sports: Sport[] =[];
  idGym: number =0;
  payments: Payment[] =[];
  panelOpenState: boolean = false;

  constructor(public dialogRef: MatDialogRef<DisplaySportsManComponent>, private worktimeService: WorktimeService,
    @Inject(MAT_DIALOG_DATA) public data :any, private dialog: MatDialog, private sportsManService: SportsManService,
    private storageService: StorageService, private sportService: SportService, private paymentService: PaymentService) { }

    ngOnInit(): void {
      this.idGym = this.data.idGym;
       this.worktimeService.findSportsManForWorktime(this.data.id).subscribe(sportsMan => {
        this.sportsMan = sportsMan;
      });
      this.storageService.findUserByUsername(this.storageService.getUsername()).subscribe(user => {
        this.user = user;
      });
    }

    openEditSportsMan(id: number) {

    }

    deleteSportsMan(id: number) {
          if(confirm('Are you sure')) {
            this.sportsManService.deleteSportsMan(id).subscribe(() => {
              window.location.reload();
            });
          }
    }

    addPayment(id: number) {
      const dialogRef = this.dialog.open(AddPaymentComponent, {
        width: '800px',
        data: {id}
      });
      dialogRef.afterClosed().subscribe(() => {
      });
    }

    addSportForSportsMan(id: number, idGym: number) {
      const dialogRef = this.dialog.open(AddSportsSportsmanComponent, {
        width: '800px',
        data: {id, idGym}
      });
      dialogRef.afterClosed().subscribe(() => {
      });
    }
    showSports(id: number) {
      this.sportService.findSportsForSportsMan(id).subscribe(sports => {
        this.sports = sports;
      });
      this.paymentService.findPaymentForSportsMan(id).subscribe(payments => {
        this.payments = payments;
      });
    }

    deletePayment(id: number) {
      if(confirm('Are you sure')) {
        this.paymentService.deletePayment(id).subscribe(() => {
          window.location.reload();
        });
      }
    }

}
