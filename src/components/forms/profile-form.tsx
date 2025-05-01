'use client';

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EditUserProfileSchema } from '@/lib/types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

type Props = {}

const ProfileForm = (props: Props) => {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>(
    {
      mode: 'onChange',
      resolver: zodResolver(EditUserProfileSchema), 
      defaultValues: {
        name: '',
        email: ''
      },
    }
  )

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-6'
        onSubmit={() => {}}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render = {
            ({field}) => (
              <FormItem>
                <FormLabel className='text-lg'>
                  User Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )
          }
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render = {
            ({field}) => (
              <FormItem>
                <FormLabel className='text-lg'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Email'
                    type='email'
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )
          }
        />
        <Button
          type='submit'
          className='self-start hover:bg-black hover:text-white '
        >
          {isLoading ? 
            (
              <>
                <Loader2 className='w-4 h-4 animate-spin'/>
                <p className='text-bold'>Saving</p>
              </>
            ):
            (
              'Save User Settings'
            )
          }
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm