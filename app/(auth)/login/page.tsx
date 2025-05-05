'use client';

import { Link } from '@heroui/link';
import { Button, Form, Input } from '@heroui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            Submit
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;
