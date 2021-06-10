import { SHOW_MIXERS } from "./mixerActionType"


export const showMixers = (mixers) => {
    return { type: SHOW_MIXERS, mixers: mixers }
}