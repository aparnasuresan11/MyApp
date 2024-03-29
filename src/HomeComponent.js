import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardImgOverlay} from 'reactstrap';
import Load from './LoadingComponent';
function RenderCard({item,isLoading,errMess}) {
    console.log("Hiii home")
    console.log(item,isLoading,errMess)
    if(isLoading){
        return (
            <div className='container'>
                <div className='row'>
                    <Load />
                </div>
            </div>
        ) 
    }
    else if(errMess){
        return(
            <h4>{errMess}</h4>
        )
    }
    else

    return(
       
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardImgOverlay><CardTitle>{item.name}</CardTitle></CardImgOverlay>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    console.log(props)
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.isLoading} errMess={props.dishErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;