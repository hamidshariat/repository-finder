import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RepositoryComponent} from "./repositores/repository.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RepositoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repositories-finder';
}
