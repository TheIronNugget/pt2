import './Wpt2.css';

import {Feature} from '../../components';


const Wpt2 = () => {
  return (
    <div className="pt2__wpt2 section__margin2" id="wpt2">
      <div className="pt2__wpt2-feature">
        <Feature title="Evolution" text="For greater or worse, we have gained and lost advantages coded inside our own bodies." />
      </div>

      <div className="pt2__wpt2-heading">
        <h1 className="gradient__text">
          Power is from within
        </h1>
        <p>Data Center</p>
      </div>

      <div className="pt2__wpt2-container">
        <Feature title="Message Board" text="Talk in our network to further your own journey." />
        <Feature title="Network" text="Contribute and unlock more opportunity than ever before." />
        <Feature title="Ascend" text="Showcase the new you and inspire others to swim through the unknown." />
      </div>
    </div>
  )
}

export default Wpt2;