import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Commit({ commit }) {
  return (
    <div>
      <h4>
        <a href={commit.url}>{commit.message}</a>
      </h4>
      <p>
        <a href={commit.author.html_url}>{commit.author.name}</a>
        <span> commited {dayjs().to(dayjs(commit.author.date))}</span>
      </p>
    </div>
  );
}

export default Commit;
