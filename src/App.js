import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
class App extends React.Component {
  state = {
    friends,
    count: 0,
    topScore: 0
  };
  componentDidMount() {
    this.setState({ friends: this.shuffleFriends(this.state.friends) });
  }
  resetData = data => {
    const resetData = data.map(friends => ({ ...friends, clicked: false }));
    return this.shuffleFriends(resetData);
};
  shuffleFriends = friends => {
    let i = friends.length - 1;
    while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = friends[i];
        friends[i] = friends[j];
        friends[j] = temp;
        i--;
    }
    return friends;
};
  
  handleIncrement = id => {
    let guessedCorrect = false;
    const newClick = this.state.friends.map(friends => {
      const newFriend = { ...friends };
      if (newFriend.id === id) {
        if (!newFriend.clicked) {
          newFriend.clicked = true;
          guessedCorrect = true;
        }
      }
      return newFriend;
    });
    guessedCorrect
      ? this.handleCorrect(newClick)
      : this.handleIncorrect(newClick);
  };
  handleCorrect = newData => {
    console.log("Correct Click");
    const { topScore, count } = this.state;
    const newScore = count + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
        friends: this.shuffleFriends(newData),
        count: newScore,
        topScore: newTopScore
    });
};

handleIncorrect = data => {
  console.log("Incorrect click");
    this.setState({
        friends: this.resetData(data),
        count: 0
    });
};
  render() {
    return (
      <div>
        
        <Nav count={this.state.count} topScore={this.state.topScore} />
        <Wrapper>
        {/* <h1>Score: {this.state.count}</h1> */}
          <Title>Simpsons Friends</Title>
          {this.state.friends.map(friends => (
            <FriendCard
              key={friends.id}
              id={friends.id}
              image={friends.image}
              handleClick={this.handleIncrement}
            />
          ))}


        </Wrapper>


      </div>
    )
  }
}




export default App;
