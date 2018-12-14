import React, { Component } from 'react';
import './App.scss';
import User from "./components/user";
import Navbar from "./components/navbar";
import ShowDetails from './components/showDetails';
import { TweenLite } from 'gsap';
import { CSSTransition } from 'react-transition-group';


class App extends Component {
  state = {
    users: [
      { id: 1334, name: "Brock Lesner", details: { imgUrl: "https://statics.sportskeeda.com/editor/2018/12/def97-15445206160671-800.jpg", city: "Webster, South Dakota" }},
      { id: 2314, name: "John Cena", details: { imgUrl: "https://pmcvariety.files.wordpress.com/2018/12/JohnCena.jpg?w=1000", city: "West Newbury" }},
      { id: 3243, name: "Batista", details: { imgUrl: "https://cdn.images.express.co.uk/img/dynamic/171/590x/Batista-1033828.jpg?r=1540016332209", city: "Washington, D.C." }},
      { id: 4424, name: "Randy Orton", details: { imgUrl: "https://thenypost.files.wordpress.com/2018/08/randyorton.jpg?quality=90&strip=all&w=618&h=410&crop=1", city: "Knoxville, Tennessee" } },
      { id: 54223, name: "Ronda Rousey", details: { imgUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fronda-rousey-first-woman-inducted-ufc-hall-of-fame.jpg?q=75&w=800&cbr=1&fit=max", city: "Riverside, California" } },
      { id: 642, name: "Triple'h", details: { imgUrl: "https://shop.wwe.com/on/demandware.static/-/Sites/default/dwc1ea1ff3/images/slot/landing/superstar-landing/Superstar-Category_Superstar_562x408_TripleHNEW.png", city: "Columbus, Ohio" } },
      { id: 724, name: "Undertaker", details: { imgUrl: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fdailyddt.com%2Ffiles%2F2018%2F09%2Ftaker.jpg&c=sc&w=850&h=560", city: "Riverside, California" } },
      { id: 84245, name: "Alexa Bliss", details: { imgUrl: "https://stillrealtous.com/wp-content/uploads/2018/12/alexa-bliss.jpg", city: "Columbus, Ohiohg" } },
      { id: 942, name: "Roman Reigns", details: { imgUrl: "https://img.timesnownews.com/story/1543950964-Roman-reigns-wwe.jpg?d=600x450", city: "Riverside, California" } },
      { id: 1024, name: "Kane", details: { imgUrl: "https://c.ndtvimg.com/mopcru8o_wwe-wrestler-kane-website_625x300_03_August_18.jpg", city: "Columbus, Ohio" }},
      { id: 1125, name: "Edge", details: { imgUrl: "https://e0.365dm.com/17/11/768x432/skysports-edge-adam-copeland_4169270.jpg?20171129104756", city: "Columbus, Ohiogeef" } },
      { id: 112512, name: "Becky Lynch", details: { imgUrl: "http://thechairshot.com/wp-content/uploads/2018/06/Entrevista-a-Becky-Lynch.jpg", city: "California" }}
    ],
    showHome: true,
    details_obj: {}
  }
  getDetails = details =>  obj => obj[details];
  handleDetails = id => {
    this.setState({ showHome: false });
    let index = this.state.users.findIndex(i => i.id === id);
    let details_obj = {};
    details_obj.id = this.state.users[index].id;
    details_obj.name = this.state.users[index].name;
    details_obj.details = this.state.users[index].details;
    this.setState({ details_obj });
  }
  backToHome = () => {
    this.setState({ showHome: true });
    TweenLite.to("user-details-wrapper", 1, {width: 100, backgroundColor: "red"});
  }
  render() {
    const { showHome, details_obj } = this.state;
    return (
      <div className="App">
        <Navbar />
        {showHome && (
          <div className="all-users">
            {this.state.users.map((user, i) => (
              <div key={user.id}>
                <CSSTransition
                  in={showHome}
                  appear={true}
                  classNames="slide-up">
                  <User 
                    user={user} 
                    getDetails={this.getDetails}
                    handleDetails={this.handleDetails}
                    style={{"transitionDelay": `${ i * .4 }s` }}/>
                </CSSTransition>
              </div>
            )
            )}
          </div>
        )}
        {!showHome && (
          <div className="user-details-wrapper">
            <ShowDetails
              details_obj={details_obj}
              getDetails={this.getDetails}
              backToHome={this.backToHome} />
          </div>
        )}
      </div>
    );
  }
}

export default App;