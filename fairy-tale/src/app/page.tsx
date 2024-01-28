import SignOutButton from '@/components/Auth/SignOutButton';
import { Button } from '@/components/ui/button';
import { getUser } from '@/lib/supabaseServerClient';
import Link from 'next/link';

export default async function Home() {
	const user = await getUser();

	return (
		<main className="flex h-screen flex-col items-center justify-center gap-8">
			<h1 className="inline-block bg-gradient-to-r from-blue-600  via-red-500 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
				Welcome to Fairy Tale
			</h1>

			{user ? (
				<section className="flex max-w-md flex-col items-center gap-4">
					<p>You are signed in</p>

					<p>You should only be able to view this if your authorized</p>

					<p>Your email is: {user.email}</p>

					<p>
						<Link href="/protected" className="text-blue-500 underline">
							Visit
						</Link>{' '}
						your protected page
					</p>

					<SignOutButton />
				</section>
			) : (
				<section className="flex max-w-md flex-col gap-4">
					<p>Please sign in to continue</p>

					<Link href="/auth/signin">
						<Button className="w-full">Sign in</Button>
					</Link>
				</section>
			)}
		</main>
	);
}
