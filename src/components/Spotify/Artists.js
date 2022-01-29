import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/nn.png';
import './home.css';

const Artists = ({artists}) => {
    
    const navigate = useNavigate();

    const handleProfile = (e) => {
        let id = e.nativeEvent.path[1].id;
        navigate(`profile/${id}`);
    }
    
    return(
        <>
            <div className="d-flex flex-wrap mt-5 justify-content-center mb-5">
                {artists.map(artist => (
                    <div key={artist.id} className="shadow-lg mx-2 mb-5 p-1 image-hover" onClick={handleProfile} id={artist.id}>
                        {artist.images.length ? 
                            <img 
                                width={"250px"}
                                height={"250px"} 
                                src={artist.images[0].url}
                                alt="image"
                            />
                            : <div className='w-0'>
                                    <img 
                                        width={"250px"}
                                        height={"250px"} 
                                        src={image}
                                        alt="photo not available"
                                    />
                                </div>
                        }
                        <div className='p-2 d-flex justify-content-between -mt-2 '>       
                            <p className="d-flex align-items-center mb-0">{artist.name}</p>
                            <small className='d-flex align-items-center text-muted mb-0'><span>❤️</span><strong>{artist.followers.total.toLocaleString()}</strong></small>                       
                        </div>
                    </div>
                ))}
            </div> 
        </>
    )    
};

export default Artists;