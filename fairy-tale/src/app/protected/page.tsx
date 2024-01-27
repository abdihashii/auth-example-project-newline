import SignOutButton from '@/components/Auth/SignOutButton';
import { getUser } from '@/lib/supabaseServerClient';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
	const user = await getUser();

	if (!user) {
		redirect('/auth/signin');
	}

	return (
		<main className="flex h-screen items-center justify-center bg-[#F8F9FA]">
			<section className="flex w-full max-w-md flex-col items-center space-y-8 rounded-lg bg-white p-6 shadow-lg">
				<h1>This page is protected</h1>

				<p>Hello, {user.email}</p>

				<SignOutButton />
			</section>
		</main>
	);
}
