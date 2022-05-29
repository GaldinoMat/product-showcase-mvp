import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl3p1121k6vdl01z6gyr975pc/master',
  cache: new InMemoryCache(),
});

export default client;
