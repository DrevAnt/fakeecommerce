import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 onClick={() => history.push(`/`)}>ShopName</h2>
      </div>
    </div>
  );
};

export default Header;
