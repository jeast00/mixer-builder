import React, { useState } from 'react';
import MixerBuilderCardList from './MixerBuilderCardList'


function App() {
  const [mixerCards, setMixerCards] = useState(samp)



  return (
    <MixerBuilderCardList mixerCards={mixerCards}/>
  )
}

const samp = [
  {
    id: 1,
    drink_name: "Bloody Mary",
    mixer_ingredients: {
      ingredient_1: "mix",
      ingredient_2: "vodka"
    }
  }
]

export default App;
