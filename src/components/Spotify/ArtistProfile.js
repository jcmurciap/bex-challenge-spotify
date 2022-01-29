import React from 'react';
import { useParams } from 'react-router-dom';


const ArtistProfile = ({artists}) => {
	const {id} = useParams();
	const artist = artists.find(artist => artist.id === id);
	console.log(artist);

  	return (
		<div className='container d-flex justify-content-center'>
			<div className="shadow-lg mb-3 mt-5 w-75">
				<div className="row g-0">
					<div className="col-md-4 d-flex justify-content-center">
						<img 
							src={artist.images[0].url} 
							className="img-fluid rounded-start" 
							alt={artist.name}
							width={"500px"}
							height={"500px"} 
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
						<h1 className="card-title">{artist.name}</h1>
						<p className="card-text "><small>💿 </small>{artist.genres[1]}</p>
						<p className="card-text "><small>📈 </small>{artist.popularity}/100</p>
						<p className="card-text"><small>🖤 </small> {artist.followers.total.toLocaleString()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  	);
};


export default ArtistProfile;
