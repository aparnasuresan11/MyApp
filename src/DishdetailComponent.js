import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import CommentForm from './CommentForm';
import COMMENTS from '../shared/comments'
import Load from './LoadingComponent'
var sc = false
function DishDetail(props) {
    // constructor(props) {
    //     console.log("Dish")
    //     super(props);
    //     console.log(this.props)
    const [com, setCommand] = useState([])

    const id = useParams();
    let dishes = props.dishes
    let comments = props.comments
    let dish = dishes.filter(d => d.id == id.dishId)
    let comment = comments.filter(c => c.dishId == id.dishId)
    console.log(comments)

    console.log(comment)
    const [showComp, setShow] = useState(false)
    useEffect(() => {
        console.log("Calling use effect")
        setCommand(comment)
        sessionStorage.setItem('COMMENTS', comment);

    }, [comments]);
    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Load />
                </div>
            </div>
        )
    }
    else if (props.dishErrMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishErrMess}</h4>
                </div>
            </div>
        )

    }
    if (dish == null) {
        return (<div></div>);
    }

    const dishitem = renderDish(dish[0])
    const dishcomment = renderComment(com)


    return (

        <div className="row">
            <div className='col-12 col-md-5 m-1' >{dishitem}</div>
            <div className='col-12 col-md-5 m-1' >{dishcomment}
                <button type='submit' onClick={() => setShow(true)}>Submit Comment</button></div>
            {showComp && <CommentForm val={true} addComment={props.addComment} dishId={id} />}
        </div>



    );

}

const renderDish = (dish) => {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} style={{ objectFit: 'contain' }} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

const renderComment = (comments) => {
    var val = false
    if (comments == null) {
        return <div></div>
    }
    const cmnt = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}

                </p>


            </li>

        )

    });
    return (
        <div>
            <h4>Comments</h4>
            <ul className='list-unstyle'>{cmnt}</ul>

        </div>
    )
}





export default DishDetail;