let defaultState = {
  text: ""
}

let mainReducer = (state = defaultState, action) => {
  if(action.type === "ORIG_TEXT") {
    return {
      ...state,
      text: action.text
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
