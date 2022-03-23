import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Book from './components/book/Book';
import { Link } from 'react-router-dom';
import Home from './views/Books/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
      </main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <BookList />
        </Route>
        <Route exact path="/list/:id">
          <Book />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
