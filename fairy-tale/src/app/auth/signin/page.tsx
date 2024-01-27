import SignInForm from '@/components/Auth/SignInForm';
import { getUser } from '@/lib/supabaseServerClient';
import { redirect } from 'next/navigation';

export default async function SignIn() {
	const user = await getUser();

	if (user) {
		redirect('/');
	}

	return (
		<main className="flex h-screen items-center justify-center bg-[#F8F9FA]">
			<SignInForm />
		</main>
	);
}
