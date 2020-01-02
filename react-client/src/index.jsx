import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TD from './components/topTen.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch('/api/story').then(res => {
      console.log(res);
    }).then(res => {
      this.setState({ data: (res) });
      return res.json();
    }).catch(err => {
      console.log('error');
      console.log(err);
    })
  }

  render() {
    return <TopTen story={this.state} />
  };

}

// const App = (props) => props.z.map(story => {
//   <TopTen story={story} key={story.id} />
// });

ReactDOM.render(<App />, document.getElementById('app'));

