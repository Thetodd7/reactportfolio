import "./footer.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function footer() {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="itemContainer">
          <a>
            
            <div className="item">
              <a
                href="https://github.com/Thetodd7"
                rel="noreferrer"
                target="_blank"
              >
                <div className="item">
                  <GitHub className="icon" />
                  <span></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/todd-granados-26a09b95/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="item">
                  <LinkedIn className="icon" />
                  <span></span>
                </div>
              </a>
              <a
                href="https://stackoverflow.com/users/story/16209378 "
                rel="noreferrer"
                target="_blank"
              >
                <div className="item">
                  <span class="iconify" data-icon="mdi:stack-overflow"></span>
                </div>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
