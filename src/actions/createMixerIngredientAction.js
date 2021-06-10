import { SHOW_MIXER_INGREDIENTS } from "./mixerIngredientActionType"

export function showMixerIngredients(mixer_ingredients) {
    return { type: SHOW_MIXER_INGREDIENTS, mixer_ingredients: mixer_ingredients }
}