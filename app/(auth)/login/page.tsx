'use client';

import { Link } from '@heroui/link';
import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const endpoint = isLogin ? '/auth/login' : '/users';

  if (errors.email || errors.password)
    throw new Error('There was an error with the login!');

  console.log(endpoint);

  console.log(watch('email'));

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">Fake Store</Link>
      <Form
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid email address"
          label="E-mail"
          labelPlacement="outside"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
        />

        <Input
          isRequired
          errorMessage={(value) => value.validationErrors[0]}
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          type="password"
          {...register('password')}
          validate={(value) => {
            if (value.length < 5) {
              return 'Password must be at least 5 characters long';
            }
          }}
        />
        <div className="flex gap-2">
          <Button color="primary" type="submit">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </div>

        <p className="text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="underline text-blue-600"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </Form>
    </div>
  );
}

export default LoginPage;
