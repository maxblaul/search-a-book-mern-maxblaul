import './App.css';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Constuct request middleware
const authLink = setContext((_, { headers }) => {
// get auth token from local storage
const token = localStorage.getItem('id_token');
// return headers so it is readable to httplink
return {
  headers: {
    ...headers, 
    authorization: token ? `Bearer ${token}` : ' ',
  },
};
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
