import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Subscription } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-message-drawer',
  templateUrl: './message-drawer.component.html',
  styleUrls: ['./message-drawer.component.scss']
})
export class MessageDrawerComponent {
  @Output() openChat = new EventEmitter<number>();
  conversations: any[] = [];
  messageSubscription?: Subscription;
  selectedUserId?: number;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.loadConversations();

    this.messageSubscription = this.chatService.getMessageReceivedObservable().subscribe(data => {
      this.updateConversationList(data);
    });
  }

  loadConversations(): void {
    this.chatService.getConversations().subscribe(response => {
      this.conversations = response.conversation_summary;
    }, error => {
      console.error('Error fetching conversations', error);
    });
  }

  updateConversationList(newMessage: any): void {
    const conversation = this.conversations.find(c => c.conversation_id === newMessage.conversation_id);
    if (conversation) {
      conversation.last_message = newMessage.last_message;
    } else {
      this.conversations.push({
        conversation_id: newMessage.conversation_id,
        last_message: newMessage.last_message,
      });
    }
  }

  selectConversation(userId: number): void {
    console.log('Selected User ID:', userId);
    this.selectedUserId = userId;
    this.openChat.emit(userId);
  }

  clearConversation(): void {
    this.selectedUserId = undefined;
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}

