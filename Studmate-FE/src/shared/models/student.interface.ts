export interface Student {
    id: number;
    firstname: string;
    lastname: string;
    description: string;
    avatar_link: string | null;
    details_completed: boolean;
    id_major: number;
    id_sex: number;
    id_status: number;
    is_blocked: boolean;
}

export interface StudentsResponse {
    students: Student[];
}
