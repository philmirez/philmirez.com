/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeFooter>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </ThemeFooter>
  )
}

export default Footer
