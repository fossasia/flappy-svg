import React from "react";
import "./Contributions.css";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import ListOfContributions from "./ContributionsList";
import contributionsRes from "../../res/contributionsRes";
function Contributions() {
  return (
    <div>
      <ul id="list">
        {ListOfContributions.contriList.map((item) => {
          return (
            <li>
              <Chip
                size="small"
                icon={<FaceIcon />}
                label={item.name}
                onClick={() => window.open(item.githubLink)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contributions;
