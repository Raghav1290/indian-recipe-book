import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RecipeProject';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);
  }
}
