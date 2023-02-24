import { Status } from "./visit"

export interface Outcome {
    id : number,
    visit_id : number,
    product_id: number,
    product_info_type: number 
  }

  export interface OutcomeFull {
    id : number,
    visit_id : number,
    product_id: number,
    product_name: string,
    product_description: string,
    product_info_type: number,
    note: string
  }

export enum OutcomeInfoType {
  CAMPIONE = 0,
  DEPLIANT = 1
}

export const StatusArray = Object.keys(Status).filter(key => !isNaN(Number(key))).map(key => ({label:  Status[Number(key)], value: Number(key)}))
