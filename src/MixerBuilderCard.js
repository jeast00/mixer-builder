import React, { useState } from 'react'

export default function MixerBuilderCard( {mixerCard } ) {
const [mixerCardFlip, setMixerCardFlip] = useState(false)

    return (
        <div className={`mixer-card ${mixerCardFlip ? 'mixer-card-flip' : ''}`} onClick={() => setMixerCardFlip(!mixerCardFlip)}>
            <div className='mixer-card-front'>
                {mixerCard.drink_name}
            </div>
            <div className='mixer-card-back'>
                {mixerCard.mixer_ingredients.map(mixer_ingredient => {
                   return <div className='mixer-ingredient'>{mixer_ingredient}</div>
                })}
            </div>
        </div>
    )
}
