import gql from 'graphql-tag'

export const CREATE_RESERVATION = gql`
  mutation CreateReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
    }
  }
`
