import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy} from "@angular/core";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription
  isAuthenticated = false

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user)
      console.log(!!user)
    })
  }

  onSave() {
    this.dataStorageService.storeRecipes()
  }

  onFecthData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
  onLogout() {
    this.authService.logout()
  }
}
