import { InputProps } from './Input.types'
import { InputStyle } from './Input.styles'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, startContent, placeholder, errors, ...props }, ref) => {
    const { base, input, error } = InputStyle()

    return (
      <div className={base()}>
        {startContent}
        <input
          ref={ref}
          placeholder={placeholder}
          defaultValue={value}
          className={input()}
          onChange={onChange}
          {...props}
        />
        {errors && <div className={error()}>{errors}</div>}
      </div>
    )
  },
)

Input.displayName = 'Input'
