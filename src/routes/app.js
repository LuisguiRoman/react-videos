import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={App} />
    </BrowserRouter>
);

export default App;