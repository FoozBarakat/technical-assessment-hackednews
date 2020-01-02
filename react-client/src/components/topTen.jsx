import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Top Ten Stories </h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* {this.props.story.map(s => <TD story={s} />)} */}
              <h1>happy new year!!!! :(</h1>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TopTen;