import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('className') className = 'collapsed';
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSave() {
    this.dataStorageService.storeRecipes();
  }

  onFecthData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }

  onToggle(dropDown: any) {
    console.log(dropDown.className);
    if (dropDown.className === 'navbar-collapse collapse') {
      dropDown.className = 'navbar-collapse collapse in';
    } else {
      dropDown.className = 'navbar-collapse collapse';
    }
  }
}
