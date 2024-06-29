
export const UPDATE_FIELD = 'UPDATE_FIELD';


interface alumnoProps{
    state : any,
    action : any
}

export const alumnoReducer = (state:any, action:any) => {
    switch (action.type) {
        case UPDATE_FIELD:
          return {
            ...state,
            [action.field]: action.value
          };
        default:
          return state;
      }
};