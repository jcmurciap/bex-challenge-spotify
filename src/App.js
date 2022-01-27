import React, { useEffect, useState } from 'react';

const CLIENT_ID = "4d1e166ef5ec4a6caad3ffd242454083";
const REDIRECT_URL = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const App = () => {
  
	const [token, setToken] = useState("");

	const handleLogout = () => {
		setToken("");
		window.localStorage.removeItem("token");
	} 

	// extract token from url hash and update it.
	useEffect(() => {
		const hash = window.location.hash;
		let token =window.localStorage.getItem("token");
		
		if(!token && hash) {
			token = hash.substring().split("&").find(e => e.startsWith("#access_token")).split("=")[1];
			window.location.hash="";
			window.localStorage.setItem("token", token);
		}

		setToken(token);
	}, []);
	
	
	return (
  		<div>
			<div>
				{!token ?
					<a 
						href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
						className='btn btn-primary'
						role="button"
					>
						Let's get started
					</a>
					: <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
				}
			</div>
    	</div>
  )
};


export default App;