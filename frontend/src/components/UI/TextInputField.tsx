import classNames from 'classnames'
import { TextInputProps } from '../../util/interface'

const TextInputField = ({
  label,
  className,
  register,
  placeholder,
  type,
  children,
}: TextInputProps) => (
  <div className="space-y-2">
    <label htmlFor={label} className="block text-left font-inter text-sm text-gray-100">
      {label}
    </label>
    <div className="flex items-center gap-1 rounded-full bg-indigo-200 py-4">
      {children}
      <input
        id={label}
        type={type}
        {...register}
        className={classNames(
          `w-full mx-5 bg-transparent px-5 text-white overflow-hidden placeholder:text-start placeholder:text-white focus:outline-none`,
          className,
        )}
        placeholder={placeholder}
      />
    </div>
  </div>
)

export default TextInputField
