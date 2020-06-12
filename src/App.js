import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
class App extends React.Component {
  state = {
    count: 0,
    friends
  };
  handleIncrement = () => {
    console.log("You've Clicked");
    
    this.setState({ count: this.state.count + 1});
    this.setState({ friends });
  };
  render() {
    return (
      <div>
        
          <h1>Score Streak: {this.state.count}</h1>
            <h1>Score to Achieve: 12</h1>
        <Wrapper>
          <Title>Simpsons Friends</Title>
          {this.state.friends.map(friends => (
            <FriendCard
            handleIncrement={this.handleIncrement}
            image={friends.image}
            name={friends.name}
          />
          ))}
          
          
        </Wrapper>
        
  
      </div>
    )
  }
}
  



export default App;
