import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import PostsPage from './components/PostsPage';
import Page from './pages/Page';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/*' element={<div>404 NOT FOUND</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
