import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSub: Subscription;
  isLogin = false;
  constructor(private dsService: DataStorageService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe(user => {
      this.isLogin = !!user;
    });
  }
  onSaveDataToDatabase() {
    this.dsService.storeRecipes();
    console.log("data is getting submitted!")
    alert("Your data is submiited to database");
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['']);

  }

}
