import ApolloClient from 'apollo-boost'

const GRAPHQL_API =
  'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'

const client = new ApolloClient({
  uri: GRAPHQL_API
})

export default client
