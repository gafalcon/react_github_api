import React from "react";
import dayjs from "dayjs";
import Image from "react-bootstrap/Image";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Commit({ commit }) {
  return (
    <div>
      <h4>
        <a href={commit.url}>{commit.message}</a>
      </h4>
      <p>
        <a href={commit.author.html_url}>
          <Image
            src={commit.author.avatar_url}
            roundedCircle
            width="25"
            height="25"
          />
          <span className="ms-2">{commit.author.name}</span>
        </a>
        <span> commited {dayjs().to(dayjs(commit.author.date))}</span>
      </p>
    </div>
  );
}

export default Commit;
