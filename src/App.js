import React from 'react';
import TrelloForm from './TrelloForm';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%'
  }
}

function App() {
  return (
    <div>
      <h2 style={styles.title}>FortNynja Trello Form</h2>
      <TrelloForm />
    </div>
  );
}

export default App;
