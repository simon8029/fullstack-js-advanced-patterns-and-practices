import React from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import styled from 'styled-components'

type BabelProps = {}
const BabelContainer = styled.div` `

export const Babel = (props: BabelProps) => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(store => store)

  return (
    <BabelContainer>
      Babel
    </BabelContainer>
  )
}


