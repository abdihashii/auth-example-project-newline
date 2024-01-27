'use client';

import Link from 'next/link';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { EyeIcon, EyeOff, Feather } from 'lucide-react';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<form className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg">
			<section className="flex items-center justify-center gap-2">
				<Feather className="h-8 w-8" />
				<h1 className="inline-block bg-gradient-to-r from-blue-600  via-red-500 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent">
					Fairy Tale
				</h1>
			</section>

			<section className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" type="email" autoComplete="off" />
			</section>

			<section className="space-y-2">
				<div className="flex flex-row justify-between">
					<Label htmlFor="password">Password</Label>
					<Label className="underline hover:cursor-pointer">
						Forgot your password?
					</Label>
				</div>
				<div className="relative">
					<Input id="password" type={showPassword ? 'text' : 'password'} />
					{showPassword ? (
						<EyeOff
							className="absolute right-2 top-2 hover:cursor-pointer hover:text-slate-500"
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					) : (
						<EyeIcon
							className="absolute right-2 top-2 hover:cursor-pointer hover:text-slate-500"
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					)}
				</div>
			</section>

			<section className="space-y-4">
				<Button type="submit" className="w-full">
					Sign In
				</Button>

				<Button type="button" className="flex w-full gap-2" variant={'outline'}>
					<FcGoogle className="h-4 w-4" /> Sign In with Google
				</Button>

				<Button type="button" className="flex w-full gap-2" variant={'outline'}>
					<FaGithub className="h-4 w-4" /> Sign In with GitHub
				</Button>
			</section>

			<section className="flex justify-center">
				<p>
					Don&apos;t have an account?{' '}
					<Link href="/auth/signup" className="underline">
						Sign Up
					</Link>
				</p>
			</section>
		</form>
	);
};

export default SignInForm;
