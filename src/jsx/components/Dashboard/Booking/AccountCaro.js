import React from 'react';
import {Carousel} from 'react-bootstrap';



const AccountCaro = () =>{
	return(
		
		<Carousel prevIcon={<span aria-hidden="true" className="fas fa-chevron-left text-black" />}
				nextIcon={<span aria-hidden="true" className="fas fa-chevron-right text-black" />}
		>
				
					<Carousel.Item>
						<img src="https://th.bing.com/th/id/R.1622bd31aff4c96af97be3c8b08481e3?rik=L6wzZiuqn%2bmUUA&riu=http%3a%2f%2fthuthuattienich.com%2fwp-content%2fuploads%2f2017%2f02%2fanh-dai-dien-facebook-doc-10.jpg&ehk=94APhZ78LaZ%2fyDLhWuZD%2fzVWm4doKkS5RkzsWBLx7qk%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
					</Carousel.Item>
					
		</Carousel>
			
	)
}

export default AccountCaro;