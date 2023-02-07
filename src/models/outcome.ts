export interface Outcome {
    id : number,
    visit_id : number,
    product_id: number,
    product_name: string,
    product_description: string,
    product_info_type: number,
    note: string
  }

export enum OutcomeType {
  MATERIALE = 1,
  RITORNARE = 0,
  NEGATIVO = -1
}

export const OutcomeTypeArray = Object.keys(OutcomeType).filter(key => !isNaN(Number(key))).map(key => ({label:  OutcomeType[Number(key)], value: Number(key)}))
