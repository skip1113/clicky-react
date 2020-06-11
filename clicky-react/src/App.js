import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import Counter from "./components/Counter";
class App extends React.Component {
  state = {
    count: 0
  };
  handIncrement = () => {
    this.setState({ count: this.state.count + 1});
  };
  render() {
    return (
      <div>
          <h1>Score Streak: {this.state.count}</h1>
            <h1>Score to Achieve: 12</h1>
        <Wrapper>
          <Title>Simpsons Friends</Title>
          <FriendCard 
            handIncrement={this.handIncrement}
            image={friends[0].image}
            name={friends[0].name}
          />
          <FriendCard 
            image={friends[1].image}
            name={friends[1].name}
          />
          <FriendCard 
            image={friends[2].image}
            name={friends[2].name}
          />
          <FriendCard 
            image={friends[3].image}
            name={friends[3].name}
          />
          <FriendCard 
            image={friends[4].image}
            name={friends[4].name}
          />
          <FriendCard 
            image={friends[5].image}
            name={friends[5].name}
          />
          <FriendCard 
            image={friends[6].image}
            name={friends[6].name}
          />
          <FriendCard 
            image={friends[7].image}
            name={friends[7].name}
          />
          <FriendCard 
            image={friends[8].image}
            name={friends[8].name}
          />
          <FriendCard 
            image={friends[9].image}
            name={friends[9].name}
          />
          <FriendCard 
            image={friends[10].image}
            name={friends[10].name}
          />
          <FriendCard 
            image={friends[11].image}
            name={friends[11].name}
          />
          
        </Wrapper>
        
  
      </div>
    )
  }
}
  



export default App;
