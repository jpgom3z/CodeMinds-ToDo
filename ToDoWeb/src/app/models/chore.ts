import { State } from "./state";

export interface ApiResponse {
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