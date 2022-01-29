import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const CategoriesScreen = ({token}) => {
  
  const [categories, setCategories] = useState([]);
  console.log(categories);

  const getCategories = async() => {
		const {data} = await axios.get("https://api.spotify.com/v1/browse/categories", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		setCategories(data.categories.items);
	}
	
	useEffect(() => {
	  getCategories()
	}, []);
	
	return (
		<div className='container d-flex justify-content-center flex-wrap'>
			{categories.map(categorie => (
				<div className="shadow-lg mb-3 mt-5 w-50 mx-1 image-hover" key={categorie.id}>
					<div className="row g-0">
						<div className="col-md-4 d-flex justify-content-center">
							<img 
								src={categorie.icons[0].url} 
								className="img-fluid rounded-start" 
								alt={categorie.name}
								width={"200px"}
								height={"200px"} 
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h1 className="card-title">{categorie.name}</h1>
								<p className="card-text "><small>🎧 </small>{categorie.id}</p>

							</div>
						</div>
					</div>
			</div>	
			))}

		</div>
	)
};
