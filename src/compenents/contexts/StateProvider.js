// import React,{useContext,createContext,useReducer, Children} from 'react'
// const stateContext=createContext()
// function StateProvider({reducer, initialState,children}) {
//     // useReducer(<reducer>, <initialState>)
//     // state,dispach methods
//   return (
//     <stateProvider.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </stateProvider.Provider>
//   )
// }

// export default StateProvider
// export const useStateValue=()=>useContext(stateProvider)


// import React,{useContext,createContext,useReducer} from 'react'
// // useReducer(<reducer>, <initialState>)
// // The useReducer Hook returns the current state and a dispatchmethod.
// // const [state, dispatch] = useReducer(reducer, initialState)
// export const stateProvider=createContext()
// export const useStateValue=()=>useContext(stateProvider)

// function StateProvider({reducer, initialState,children}) {
//   return (
//     <stateProvider.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </stateProvider.Provider>
//   )
// }

// export default StateProvider

import React,{useContext,createContext,useReducer} from 'react'

const stateProvider= createContext()

export const useStateValue=()=>useContext(stateProvider)

// const [state, dispatch] = useReducer(reducer, initialState)
// const [state, setstate] = useState(initialState);

function StateProvider({reducer, initialState,children}) {
  return (
    <stateProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateProvider.Provider>
  )
}

export default StateProvider







