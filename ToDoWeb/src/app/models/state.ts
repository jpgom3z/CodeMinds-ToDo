export interface StateData {
    statusCode: number;
    success: boolean;
    messages: string[];
    data: State[];
  }

export interface State {
    id: number;
    name: string;
  }