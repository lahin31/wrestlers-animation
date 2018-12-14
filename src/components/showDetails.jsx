import React, { Component } from 'react';
import "./showDetails.scss";
import { CSSTransition } from 'react-transition-group';
import { TweenMax } from 'gsap';

class ShowDetails extends Component {
    componentDidMount() {
        TweenMax.to(".user-image", 3, { x: 250 });
        TweenMax.to(".user-info", 3, { y: -20 });
    }
    handleBackToHome = () => {
        TweenMax.to(".user-image", 3, { scaleY: 0, ease: "ease-in" });
        TweenMax.to(".user-info", 3, { scaleX: 0, ease: "ease-in" });
        setTimeout(() =>this.props.backToHome(), 3000)
    }
    render() {
        return (
            <React.Fragment>
                <div className="icon-arrow-left" onClick={this.handleBackToHome}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={400}
                        classNames="fade">
                        <div className="show-details">
                            <div className="user-image">
                                <img 
                                src={this.props.getDetails('imgUrl')(this.props.details_obj.details)}
                                alt=""
                                className="user-image"/>
                            </div>
                            <div className="user-info">
                                <h2>{this.props.details_obj.name}</h2>
                                <p>Born Place: {this.props.getDetails('city')(this.props.details_obj.details)}</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum fugit quis laboriosam facere! Fugiat quas aspernatur error atque nobis molestias. Perspiciatis mollitia consequatur eaque voluptas? Quos voluptatum illo aperiam itaque?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptates eum nam nemo, qui eaque voluptate sequi! Optio quisquam possimus culpa, ea voluptate soluta molestiae hic deleniti, debitis mollitia non?</p>
                            </div>
                        </div>
                    </CSSTransition>
            </React.Fragment>
        )
    }
}

export default ShowDetails;