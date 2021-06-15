import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import LinkList from '@/pages/link-list';
import Page from '@/pages/index';
import '@/App.less';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/link-list" component={LinkList} />
    </Router>
  );
};

export default App;
