import React from 'react';
import { Dog } from './components/dog'

function App() {
  return (
    <div>
      <Dog age="old" />
      <Dog age="young" />
      <Dog age="adult" />
    </div>
  )
}

export default App;
