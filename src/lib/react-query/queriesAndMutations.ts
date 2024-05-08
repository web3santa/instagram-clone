import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'
import { INewUser } from '@/types'


  export const userCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
  }


  export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {email: string; password: string}) => signInAccount(user)
    })
  }