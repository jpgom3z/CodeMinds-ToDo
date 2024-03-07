import { State } from "./state";

export interface ChoreData {
    statusCode: number;
    success: boolean;
    messages: string[];
    data: Chore[];
  }

export interface Chore {
    id: number;
    description: string;
    dueDate: string;
    state: State;
  }

  export interface CreateChore {
    description: string;
    dueDate: string;
    state: number;
  }