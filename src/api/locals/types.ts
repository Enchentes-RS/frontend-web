export type Local = {
  _id: string
  name: string
  address: string
  latitude: number
  longitude: number
  donations?: 'receiving' | 'not_receiving' | 'urgency'
  volunteers?: 'receiving' | 'not_receiving' | 'urgency'
}

export type LocalsResponse = Local[]
