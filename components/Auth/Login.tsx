import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'

interface LoginFormData {
  email: string
  password: string
  remember: boolean
}

export default function Login() {
  const { register, handleSubmit, errors } = useForm<LoginFormData>();

  const onSubmit = handleSubmit((email, password, remember) => {
    console.log(email, password, remember);
  })
 
  return (
    <form action="" className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="text-sm font-bold text-gray-600 block">Email</label>
        <input 
          {...register("email", { 
            required: true,
            maxLength: 25
          })} 
          name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>

      <div>
        <label htmlFor="password" className="text-sm font-bold text-gray-600 block">Password</label>
        <input 
          {...register("password", { 
            required: true,
            minLength: 6,
            maxLength: 25
          })} 
          name="password" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input 
            {...register("remember", { required: true})} 
            name="remember" type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>
        <div>
          <a href="" className="font-medium text-sm text-blue-500">Forgot Password?</a>
        </div>
      </div>
      
      <div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
      </div>
    </form>
  )
}
