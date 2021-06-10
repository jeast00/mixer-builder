import { SHOW_MIXER_INGREDIENTS } from "./mixerIngredientActionType"

export const showMixerIngredients = (mixer_ingredients) => {
    return { type: SHOW_MIXER_INGREDIENTS, mixer_ingredients: mixer_ingredients }
}