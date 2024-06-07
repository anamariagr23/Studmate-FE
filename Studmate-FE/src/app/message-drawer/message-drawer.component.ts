import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message-drawer',
  templateUrl: './message-drawer.component.html',
  styleUrls: ['./message-drawer.component.scss']
})
export class MessageDrawerComponent {
  conversations: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getConversations().subscribe(response => {
      this.conversations = response.conversation_summary;
      console.log(this.conversations);
    }, error => {
      console.error('Error fetching conversations', error);
    });
  }

}
