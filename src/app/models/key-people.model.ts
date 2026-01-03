export interface KeyPeopleResponse {
    key: string;
    description: string;
    longDescription: string | null;
    data: KeyPeople[];
}

export interface KeyPeople {
    id: number;
    position: string;
    people: string[];
}
