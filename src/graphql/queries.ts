import gql from 'graphql-tag'

export const GET_RESERVATIONS = gql`
  {
    reservations {
      id
      hotelName
      name
      arrivalDate
      departureDate
    }
  }
`
