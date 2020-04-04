import React from "react";


class MovieTabs extends React.Component{
  componentWillReceiveProps(nextProps, nextState) {
    console.log("willReceiveProps");
    console.log("nextProps sort_by", nextProps.sort_by);
    console.log("prevProps sort_by", this.props.sort_by);
  }
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.sort_by !== this.props.sort_by) {
       return true;
    } else {
      return false;
    }
  }
  
  render() {
     const { sort_by, updateSortBy } = this.props;
  // const handleClick = value => () => {
  //     updateSortBy(value);
  //   };
  // };
  const handleClick = value => {
    return event => {
      updateSortBy(value);
    };
  };

  const getClassActiveLink = value => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassActiveLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassActiveLink("revenue.desc")}
          // className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassActiveLink("vote_average.desc")}
          // className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
 }

}

     

export default MovieTabs;
