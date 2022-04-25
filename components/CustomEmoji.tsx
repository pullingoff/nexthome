import { ReactNode } from "react"
import styled from "styled-components"

const CustomEmoji = ({aria, children}: {
    aria: string
    children: ReactNode
}) => {
    return (
      <StyledE role="img" aria-label={aria}>
          {children}
      </StyledE>
    )
  }

const StyledE = styled.span`
`

export default CustomEmoji