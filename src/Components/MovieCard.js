import React from 'react'
import { Card} from 'react-bootstrap'

function MovieCard({title, url, rate, description, trailer}) {
    return (
        <>
            <Card className='movie' style={{width: "350px", height: "220"}}>
                <Card.Img  variant="top" src={url} style={{width: "100%", height: '40%'}} />
                <Card.Body style={{width: "100%", height: '50%'}}>
                    <Card.Title style={{ width: "100%", height: '10%',color:'blue', fontWeight:'Bold'}}>{title}</Card.Title>
                    <Card.Text style={{width: "100%", height: '20%',wordWrap:'break-word', textAlign:'center', textOverflow:'ellipsis'}}>
                        {description}
                    </Card.Text>
                    <Card.Text>
                    <h4>Rating:</h4>
                    <img src="https://img.icons8.com/color/48/000000/rating-circled.png" style={{ width: '7%', height:'50%'}}/>
                    <h4>{rate}/10</h4>
                    </Card.Text>
                    <iframe className='embed-responsive-item' src={trailer} style={{ width: '80%'}} ></iframe>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard
