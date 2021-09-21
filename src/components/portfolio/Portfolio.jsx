import "./portfolio.scss";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1> Portfolio </h1>
      <ul>
        <li>Work</li>
        <li>Work</li>
        <li>Work</li>
      </ul>
      <div className="workcontiner">
        <div className="workitem">
          <img src="codingpic.jpeg"   alt="" />
          <h3> Team Profile Generator </h3>
          <div className="workitem">
          <img src="codingpic.jpeg"   alt="" />
          <h3> Team Profile Generator </h3>
        </div><div className="workitem">
          <img src="./codingpic.jpeg"alt="" />
          <h3> Team Profile Generator </h3>
        </div>
        </div>
      </div>
    </div>
  );
}
