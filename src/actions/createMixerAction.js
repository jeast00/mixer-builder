import { SHOW_MIXERS } from "./mixerActionType"


export function showMixers(mixers) {
    return { type: SHOW_MIXERS, mixers: mixers }
}