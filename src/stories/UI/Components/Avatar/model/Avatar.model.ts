import React from 'react'
import { IconType } from "react-icons";

export type statusType = 'success' | 'warning' | 'error'

export interface IAvatarProps {
  className?: string
  size?: number
  image?: IconType
  title?: string
  status?: statusType
  onClick?: (event: React.MouseEvent) => void
}
