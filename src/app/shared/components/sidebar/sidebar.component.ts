import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public tagHistory: string [] = [];

  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory
  }

  searchTag(tag:string):void {
    this.gifsService.searchTag(tag)
  }

}
