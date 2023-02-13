import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocFromAuth(user);
	};

	return (
		<div>
			<h1>This is the sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
