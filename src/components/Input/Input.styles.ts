import { tv } from 'tailwind-variants'

export const InputStyle = tv({
  slots: {
    base: 'w-full relative text-white flex items-center border-b border-white/40 hover:border-white active:border-white transition-all duration-200',
    input: 'w-full py-1 px-3 bg-transparent focus:outline-none text-sm',
    error: 'text-sm text-red-600',
  },
})
