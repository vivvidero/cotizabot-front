import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const LoginLayout: FC<Props> = ({children}) => {
  return (
    <main className='h-screen w-full'>
      {children}
    </main>
  )
}
