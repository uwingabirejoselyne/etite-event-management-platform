import classNames from 'classnames'
import { ButtonProps } from '../../util/interface'

export default function Button({ className, children, color = 'filled', ...rest }: ButtonProps) {
  const buttonClassName = classNames([
    'text-center border border-2 button-solid p-3 rounded-full font-bold font-inter',
    color === 'filled' && 'bg-white text-indigo border-white',
    color === 'outlined' && 'bg-indigo text-white',
    color === 'danger' && 'border-lachs-200 text-lachs-200',
    className,
  ])

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  )
}
