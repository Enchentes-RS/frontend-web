export type Local = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  donations?:
    | 'receiving'
    | 'not_receiving'
    | 'urgency'
    | 'not_information'
    | 'by_scale'
    | 'under_control'
    | ''
  volunteers?:
    | 'receiving'
    | 'not_receiving'
    | 'urgency'
    | 'not_information'
    | 'by_scale'
    | 'under_control'
    | ''
}

export type LocalsResponse = Local[]
