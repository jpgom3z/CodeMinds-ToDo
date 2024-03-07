export interface CreateUpdateData {
    description: string;
    dueDate: Date;
    stateId: number;
}

export interface DeleteData {
    id: number;
}

  export interface UpdateData {
    id: number;
    description: string;
    dueDate: Date;
    stateId: number;
}