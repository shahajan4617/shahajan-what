import { Component, OnInit } from '@angular/core';
import { ConHeaderComponent } from './con-header/con-header.component';
import { FooterComponent } from './footer/footer.component';
import { MsgWindowComponent } from './msg-window/msg-window.component';

@Component({
  standalone: true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports: [ConHeaderComponent, FooterComponent, MsgWindowComponent],
})
export class ConversationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
