import './Possibility.css';

import possImage from '../../assets/3dSplash.png'

const Possibility = () => {
  return (
    <div className="pt2__possibility section__padding" id="possibility">
    
      <div className="pt2__possibility-image">
        <img src={possImage} alt="possibility" />
      </div>

      <div className="pt2__possibility-content">
        <h4>Join The Cause</h4>
        <h1 className='gradient__text'> Combinations</h1>
        <p>Mix your imagination with science to be whatever you want to be.</p>
        <h4>It's Not Too Late!</h4>
      </div>
    </div>
  )
}

export default Possibility;