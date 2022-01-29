import React from 'react';
import woman from "../../images/woman.jpg";

const CLIENT_ID = "4d1e166ef5ec4a6caad3ffd242454083";
const REDIRECT_URL = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const LoginScreen = () => {
	return (
    	<>
			<div className="d-flex">
				<div className="w-50 vh-100 d-flex align-items-center justify-content-center">
					<a 
						href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
						className='btn btn-outline-primary btn-lg'
						role="button"
					>
						Let's get started
					</a>
				</div>
				<section className="w-55 vh-100 opacity-100">
					<img src={woman} alt="woman listening music" height="100%" width="100%"/>
				</section>
			</div>
		</>
  	)
}

export default LoginScreen;