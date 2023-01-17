import { DataStorageService } from './../shared/data-storage.service';
import { Component} from "@angular/core";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService){}

  onSave() {
    this.dataStorageService.storeRecipes()
  }

  onFecthData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
