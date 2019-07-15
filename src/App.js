import React, { useState } from 'react';
import { Dog } from './components/dog';
import { Lawn } from './components/lawn';
import dogsConfig from './config/dogsConfig.json';
import styled from 'styled-components';
import { YoungDog, AdultDog, OldDog } from './dogs';

const DogNameInput = styled.input`
  margin-right:10px;
`

const DogAgesSelect = styled.select`
  margin-right:10px;
`

const AddDogButton = styled.button`
  :disabled{
    cursor: not-allowed;
  }
`

function App() {
  const [dogs, addDog] = useState([]);
  const [dogsName, setName] = useState('');
  const [selectedAge, selectAge] = useState(dogsConfig.avaliableAges[0]);
  const onAddDogClick = () => {
    switch (true) {
      case selectedAge === 'young':
        addDog([...dogs, new YoungDog(dogsName)]);
        break;
      case selectedAge === 'adult':
        addDog([...dogs, new AdultDog(dogsName)]);
        break;
      case selectedAge === 'old':
        addDog([...dogs, new OldDog(dogsName)]);
        break;
      default:
        break;
    }
    setName('');
  }
  return (
    <div>
      <Lawn>
        {dogs.map((dog, index) => <Dog onBodyClick={() => alert(dog.getName())} onHeadClick={() => alert(dog.bark())} key={index} age={dog.getAge()} />)}
      </Lawn>
      <DogNameInput onChange={e => setName(e.target.value)} value={dogsName} placeholder="Dogs name" />
      <DogAgesSelect value={selectedAge} onChange={e => selectAge(e.target.value)} >
        {dogsConfig.avaliableAges.map((age, index) => <option key={index}>{age}</option>)}
      </DogAgesSelect>
      <AddDogButton disabled={dogsName === ''} onClick={onAddDogClick}>Add dog</AddDogButton>
    </div>
  )
}

export default App;
