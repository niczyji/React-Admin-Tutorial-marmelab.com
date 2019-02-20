import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './components/users';
import { PostList, PostEdit, PostCreate} from './components/posts';

// Customizing the Menu Icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

// Adding a Dashboard
import Dashboard from './components/Dashboard';

// Adding a Login Page
import authProvider from './components/authProvider';


const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;