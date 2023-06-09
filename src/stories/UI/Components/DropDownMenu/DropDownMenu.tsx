import React from 'react'

import { DropDownMenuWrapper } from './styles/DropDownMenu.style'
import { IDropDownMenuProps } from './model/DropDownMenu.model'

export const DropDownMenu: React.FC<IDropDownMenuProps> = (props) => {
    const {
        color = 'light',
        visibleDropdownMenu = false,
        activeDropDown,
        width = 104,
        children,
        direction,
        footer,
        header,
        isHeader,
        isFooter,
    } = props
    const activeDropMenu = visibleDropdownMenu  ? 'open' : 'close' // if else from direction,transitioned and actived

    const defaultChildren = 'Lorem ipsum'

    return (
      <>
          { activeDropDown && (
            <DropDownMenuWrapper className={`${direction} ${activeDropMenu} ${width}px`} color={color}>
                <div>{isHeader ?? header}</div>
                <div>{children ?? defaultChildren}</div>
                <div>{isFooter ?? footer}</div>
            </DropDownMenuWrapper>
          ) }
      </>
    )
}
