export namespace NCreateReservation {
  export interface IProps {
    onSubmit: (data: any) => void
  }

  export interface IState {
    name: string
    hotelName: string
    arrivalDate: string
    departureDate: string
  }
}

export namespace NReservations {
  export interface IProps {
    name: string
    hotelName: string
    arrivalDate: string
    departureDate: string
  }
}
