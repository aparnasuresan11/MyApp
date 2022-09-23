import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import withRouter from 'react-router'
import Home from './HomeComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux'
import { addComment,fetchDishes } from '../redux/ActionCreator';
import { actions } from 'react-redux-form';
const mapStateToProps=state=>{
  return {
      dishes:state.dishes,
      comments:state.comments,
      promotions:state.promotions,
      leaders:state.leaders

  }

}

const mapDispatchToProps=(dispatch)=>({
        addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
        fetchDishes: ()=>{dispatch(fetchDishes())},
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
      });

class Main extends Component {

  
  constructor(props) {
    super(props);
    console.log(addComment)
    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS,
    //   selectedDish: null,

    // };

    
  }

  componentDidMount(){
    console.log("Mount")
    this.props.fetchDishes();
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }
   

  render() {
    // const HomePage = () => {
    //   return(
    //     <Home 
    //     dish={this.state.dishes.filter((dish) => dish.featured)[0]}
    //     promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    //     leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    // />
    //   );
    // }

    const DishWithId = ({ props }) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishId, 10))} />
      );
    };




    return (
      <div>

        <Header />
        <div className='container'>
         { console.log(this.props.dishes.dishes)}
          <Routes>
            <Route path='/' element={<Home
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              isLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errmess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />} />
            <Route path='/home' element={<Home
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              isLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errmess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />} />
            <Route exact path='/menu' element={<Menu dishes={this.props.dishes.dishes} />} />

            <Route path="/menu/:dishId" element={<DishDetail dishes={this.props.dishes.dishes}
            
            comments={this.props.comments} 
            addComment={this.props.addComment}/>}
             />
            {/* <Route  path='/menu/:dishId' element={(props)=>{<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishId,10))[0]} />
        }} /> */}

            <Route exact path='/contactus' element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Route exact path='/aboutus' element={<About leaders={this.props.leaders} />} />

          </Routes>
        </div>

        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}


export default (connect(mapStateToProps,mapDispatchToProps)(Main));