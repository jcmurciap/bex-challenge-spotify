import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import ArtistProfile from '../components/Spotify/ArtistProfile';
import Artists from '../components/Spotify/Artists';
import logo from '../images/bex.png';
import { CategoriesScreen } from '../components/Spotify/CategoriesScreen';

export const DashboardRoutes = () => {
    
    const [token, setToken] = useState("");
	const [keyWord, setKeyWord] = useState("");
	const [artists, setArtists] = useState([]);

	const getArtists = async(event) => {
		event.preventDefault();
		const {data} = await axios.get("https://api.spotify.com/v1/search", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type" : "application/x-www-form-urlencoded"
			},
			params: {
				q: keyWord,
				type: "artist",
	
			}
		});

		setArtists(data.artists.items);
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
		window.location.hash=""
	}, [artists]);
    
    return (
        <>
            <div className='container mt-3'>
			    <div className="d-flex justify-content-start">					
			    	<img 
			    		src={logo}
			    		alt="bex logo"
			    		width={"150px"}
			    		height={"50px"}
			    	/>
			    </div>
			    <form onSubmit={getArtists} className='d-flex justify-content-center w-100 mt-5'>
			    	<input 
			    		type="text" 
			    		onChange={event => setKeyWord(event.target.value)}
			    		className='mx-3 w-50 shadow bg-white rounded form-control'
			    		placeholder='   Search...'	
			    	/>
			    	<Link to="artists">
                        <button type="button" className='btn btn-outline-primary'>Search</button>
                    </Link>
			    </form>
				<div className='mx-5 mt-2'>
					<Link to="categories">
						<button type="button" className='btn btn-info'>Categories</button>
					</Link>
				</div>
    	    </div>
            <div>
                <Routes>
                    <Route path="artists" element={<Artists artists={artists}/>}/>
                    <Route path="artists/profile/:id" element={<ArtistProfile artists={artists} />}/>
                    <Route path="/categories" element={<CategoriesScreen token={token}/>}/>
                </Routes>
            </div>  
        </>
    )  
}
