import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './views/Books/Home';
import BookDetail from './views/Books/BookDetail';

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
        <Route exact path="/book">
          <BookList />
        </Route>
        <Route path="/book/:id">
          <BookDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
