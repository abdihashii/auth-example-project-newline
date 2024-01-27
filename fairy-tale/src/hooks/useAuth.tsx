'use client';

import { Database } from '@/types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FieldValues } from 'react-hook-form';

const useAuth = () => {
	const supabase = createClientComponentClient<Database>();

	const handleSignInWithEmail = async (data: FieldValues) => {
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password,
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		}
	};

	return { handleSignInWithEmail };
};

export default useAuth;
