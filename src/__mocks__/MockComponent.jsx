import useTheme from '../Theme'
import {ThemeProvider} from '@mui/material/styles'
import React, {createContext} from 'react'

const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

/**
 * @param {Object} children React component(s)
 * @return {Object} React component
 */
export const MockComponent = ({children}) => {
  const {theme, colorMode} = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
