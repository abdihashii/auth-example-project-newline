'use client';

import React, { PropsWithChildren } from 'react';
import { Button } from '../ui/button';
import useAuth from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const SignOutButton = (props: PropsWithChildren) => {
	const {
		handleSignOut,
		loadingState: { signOut: signOutLoading },
	} = useAuth();

	return (
		<Button {...props} onClick={handleSignOut}>
			{signOutLoading ? <Loader2 className="animate-spin" /> : 'Sign Out'}
		</Button>
	);
};

export default SignOutButton;
