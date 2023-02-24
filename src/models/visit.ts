export interface Visit {
    id: number,
    doctor_id: number,
    agent_id: number,
    date: Date,
    status: number,
    note: string
  }

  export enum Status {
    NEGATIVO = -1,
    RITORNARE = 0,
    MATERIALE = 1,
    PROGRAMMATA = 2
  }