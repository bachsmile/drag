export const  state = () => (
  {
    size: 0,
    isSetting: false
  }
)
export const  mutations =  {
  UPDATE_SIZE (state, payload ) {
    state.size = {...state.size,...payload}
  },
  UPDATE_SHOW_SETTING (state, payload ) {
    state.isSetting = payload
  }
}
  
export const  actions =  {
  setSize (context, payload ) {
    context.commit("UPDATE_SIZE",payload)
  },
  setIsSetting (context, payload ) {
    context.commit("UPDATE_SHOW_SETTING",payload)
  }
}
