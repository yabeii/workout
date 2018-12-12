import { ADD_MACRO_ENTRY } from '../constants/macroData';

const initialState = {
    macroEntries: {},
}

const macroReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MACRO_ENTRY: 
        if(state.macroEntries[payload.date] === undefined) {
            return {
                ...state,
                macroEntries: {
                    ...state.macroEntries,
                    [payload.date]: [{
                        compressed:payload.compressed,
                        uncompressed: payload.uncompressed,
                    }]
                }
            };
        } else {
            return{
                ...state, 
                macroEntries: {
                    ...state.macroEntries,
                    [payload.date]: [
                        ...state.macroEntries[payload.date],
                        {
                            compressed: payload.compressed,
                            uncompressed: payload.uncompressed,
                        }
                    ]
                }
            }
        
        }
        default: 
        return state;
    }
}



export default macroReducer;