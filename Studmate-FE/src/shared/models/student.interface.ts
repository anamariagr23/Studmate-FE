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
    year_of_study: number;
}

export interface StudentsResponse {
    students: Student[];
}

export interface Major {
    id: number;
    name: string;
}

export interface MajorResponse {
    majors: Major[]
}
export interface Dorm {
    id: number;
    name: string;
}
export interface DormResponse {
    dorms: Dorm[];
}

export interface Sex {
    id: number;
    name: string;
}
export interface SexResponse {
    sexes: Sex[];
}