import { Input } from '@material-tailwind/react'

export const FormInput = ({ type, placeholder, label, onchange, name }) => {
    const id = `component-${(Math.random() * 9999999)}`
    
    return (
        <div className='w-full flex flex-col space-y-2 my-3'>
            <label htmlFor={id} className='capitalize font-semibold text-sm'>
                { label }
            </label>
            <Input
                id={id}
                type={type}
                name={name}
                step={ type == 'number' ? 0.001 : null }
                min={ type == "number" ? 0.001 : null }
                placeholder={placeholder}
                className='w-full px-2 py-3 rounded-xl bg-slate-700'
                onChange={(e) => onchange(e.target.value, name)}
            />
        </div>
    )
}