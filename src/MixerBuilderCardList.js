import React from 'react';
import MixerBuilderCard from './MixerBuilderCard';

export default function MixerBuilderCardList( {mixerCards } ) {
    return (
        <div>
            {mixerCards.map(mixerCard => {
                return <MixerBuilderCard mixerCard={mixerCard} key={mixerCard.id} />
            })}
        </div>
    )
}
