export namespace NCreateReservation {
  export interface IFormProps {
    onSubmit: (data: any) => void
  }

  export interface IFormState {
    name: string
    hotelName: string
    arrivalDate: string
    departureDate: string
  }
}

export namespace NReservations {
  export interface IReservationProps {
    name: string
    hotelName: string
    arrivalDate: string
    departureDate: string
  }

  export interface IReservation {
    id: string
    hotelName: string
    name: string
    arrivalDate: string
    departureDate: string
  }
}

export interface IApolloGQLProps {
  data: any
}
export interface IRefreshState {
  refreshing: boolean
}
