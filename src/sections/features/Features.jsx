import './Features.scss';

import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Scrambling DNA',
    text: 'Add to the library as everyone has at least one unique set of code that could make us all better.'
  },
  {
    title: 'New Laws',
    text: "Against sports and other competitve activities, it just isn't fair for the regular competetitors."
  },
  {
    title: 'New Heights',
    text: "Push the body to it's utmost limit for any situation."
  },
  {
    title: 'Traveler',
    text: 'Best the enviornment and even in the galaxy itself.'
  },

]

const Features = () => {
  return (
    <div className="pt2__features section__padding" id="features">
      <div className="pt2__features-heading">
        <h1 className="gradient__text">
          A better mind will lead to a better body and we will collectively succeed.
        </h1>
        <button type='button'>
          Ask about our Premium
        </button>
      </div>

      <div className="pt2__features-container">
        {featuresData.map((item, index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features;