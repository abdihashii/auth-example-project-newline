'use client';

import { Database } from '@/types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

const useAuth = () => {
	const supabase = createClientComponentClient<Database>();

	const [loadingState, setLoadingState] = useState({
		signIn: false,
		signInWithGitHub: false,
		signInWithGoogle: false,
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

	const handleSignInWithGitHub = async () => {
		try {
			setLoadingState((prev) => ({
				...prev,
				signInWithGitHub: true,
			}));

			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'github',
				options: {
					redirectTo: `${location.origin}/api/auth/callback`,
				},
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingState((prev) => ({
				...prev,
				signInWithGitHub: false,
			}));
		}
	};

	const handleSignInWithGoogle = async () => {
		try {
			setLoadingState((prev) => ({
				...prev,
				signInWithGoogle: true,
			}));

			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: `${location.origin}/api/auth/callback`,
					queryParams: {
						access_type: 'offline',
						prompt: 'consent',
					},
				},
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingState((prev) => ({
				...prev,
				signInWithGoogle: false,
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

	return {
		handleSignInWithEmail,
		handleSignInWithGitHub,
		handleSignInWithGoogle,
		handleSignOut,
		loadingState,
	};
};

export default useAuth;
