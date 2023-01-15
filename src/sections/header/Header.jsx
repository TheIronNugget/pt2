import './Header.scss';
import gene from '../../assets/dna.png';

const Header = () => {
  return (
    <div className="pt2__header section__padding" id="home">
      <div className="pt2__header-content">
        <h1 className='gradient__text'>Evolution at our fingertips</h1>
        <p>Genetic code at your fingertips to achieve what was once thought as only fantasy. From height to eye color, you can finally get what you desire from what your body has to offer!</p>
        <div className="pt2__header-content__input">
          <input type="email" placeholder='Email Address' />
          <button type="button" >Start</button>
        </div>

        
      </div>
      <div className="pt2__header-image">
          <img src={gene} alt="gene" />
      </div>
    </div>
    
  )
}

export default Header;