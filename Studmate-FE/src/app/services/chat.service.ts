import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConversationsResponse } from 'src/shared/models/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getConversations(): Observable<ConversationsResponse> {
    return this.http.get<ConversationsResponse>(`https://127.0.0.1:5000/get-conversations`);
  }
}
