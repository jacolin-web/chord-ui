// src/App.tsx
import { Button } from './components/Button';
import { sprinkles } from './styles/sprinkles.css';

function App() {
  return (
    <div className={sprinkles({ padding: 'large' })}>
      <h1>Component Playground</h1>
    
      <section>
        {/* Test Button variants */}
        <h2>Buttons</h2>
        <div className={sprinkles({ 
          display: 'flex', 
          gap: 'medium'  
        })}>
          <Button variant="primary" size="small">Small Primary</Button>
          <Button variant="primary" size="large">Large Primary</Button>
          <Button variant="secondary" size="small">Small Secondary</Button>
          <Button variant="secondary" size="large">Large Secondary</Button>
        </div>
      </section>

      {/* TODO: Display Card & Input components */}
    </div>
  );
}

export default App;