'use client';

import { Database } from '@/types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

const useAuth = () => {
	const supabase = createClientComponentClient<Database>();

	const [loadingState, setLoadingState] = useState({
		signIn: false,
		signUp: false,
		signOut: false,
	});

	const handleSignInWithEmail = async (data: FieldValues) => {
		try {
			setLoadingState((prev) => ({
				...prev,
				signIn: true,
			}));

			const { error } = await supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password,
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingState((prev) => ({
				...prev,
				signIn: false,
			}));
		}
	};

	const handleSignOut = async () => {
		try {
			setLoadingState((prev) => ({
				...prev,
				signOut: true,
			}));

			const { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingState((prev) => ({
				...prev,
				signOut: false,
			}));
		}
	};

	return { handleSignInWithEmail, handleSignOut, loadingState };
};

export default useAuth;
