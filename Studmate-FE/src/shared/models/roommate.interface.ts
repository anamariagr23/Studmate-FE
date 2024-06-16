export interface RoommateRequest {
    request_id: number;
    requester_id: number;
    requester_lastname: string;
    requester_firstname: string;
    requester_status_id: number;
    requester_avatar: string;
    viewed: boolean;
}

export interface RoommateRequestsResponse {
    requests: RoommateRequest[];
}


export interface RoommateRequestNotification {
    message: string;
    target_id: number;
}

export interface RequestViewedNotification {
    message: string;
    request_id: number;
}

