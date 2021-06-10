import { SHOW_MIXER_INGREDIENTS } from "../actions/mixerIngredientActionType";


export default mixerIngredientsReducer = (state = {mixer_ingredients: [], loading: false}, action) => {
    switch(action.type) {
        case SHOW_MIXER_INGREDIENTS:
            return action.mixer_ingredients;

            default:
                return state;
    }
}