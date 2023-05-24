import React, { FC } from 'react'
import { AsideProps } from './model/Aside.model'
import { AsideGrowedContainer, AsideWrapper } from './styles/Aside.styled'

const Aside:FC<AsideProps> = ({
  color = 'light',
  className,
  asideLinksContent,
}) => {
  return (
    <AsideWrapper color={color} className={className}>
      <AsideGrowedContainer>
        { asideLinksContent }
      </AsideGrowedContainer>
    </AsideWrapper>
  )
}

export default Aside
