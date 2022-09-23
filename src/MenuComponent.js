// import {
//     Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle
// } from 'reactstrap';
// import React, { Component } from 'react';
// import DishdetailComponent from './DishdetailComponent';

// class Menu extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null,

//         }
//     }

//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish });
//     }



//     render() {
//         const menu = this.props.dishes.map((dish) => {

//             return (


//                 <div className="col-12 col-md-5 m-1">
//                     {console.log(dish.image)}

//                     <Card key={dish.id}
//                         onClick={() => this.onDishSelect(dish)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );

//         });

//         return (
//             <div className="container">
//                 <div className="row ">
//                     {menu}
//                 </div>
//                     <DishdetailComponent dish={this.state.selectedDish} />
//             </div>

//              );
//     }
// }
// export default Menu;


import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetail from './DishdetailComponent';

function RenderMenuItem ({dish}) {
    console.log(dish)
    const [selectedDish,setDish]=useState([]);
        // const dishcomp=(dish)=>{
        //     console.log(dish)
        //     setDish(dish)
        //     console.log("Func");
        //     console.log(selectedDish)
        //    return <DishDetail />
        // }
        return (
           
            <Card >
                <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name}  />
                <CardImgOverlay>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
           
        );
        }

    const Menu = (props) => {
        console.log(props)
        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;