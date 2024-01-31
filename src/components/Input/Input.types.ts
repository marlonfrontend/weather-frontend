import { ChangeEvent, ReactNode } from 'react'

export type InputProps = {
  placeholder?: string
  type?: string
  value?: string
  errors?: string
  startContent: ReactNode
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
