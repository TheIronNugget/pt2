import './Blog.css';
import Artical from '../../components/article/Article';
import {pic01, pic02, pic03, pic04, pic05} from './gallery';


const Blog = () => {
  return (
    <div className="pt2__blog section__padding" id="blog">
      <div className="pt2__blog-heading">
        <h1 className="gradient__text">
          Latest discoveries!
        </h1>
      </div>
      <div className="pt2__blog-container">
        <div className="pt2__blog-container01">
          <Artical imgUrl={pic01} date="Dec 18, 1011"     text="Wear your Genes better!" />
        </div>
        <div className="pt2__blog-container02">
          <Artical imgUrl={pic02} date="Dec 18, 1011" text="Wear your Genes better!" />
          <Artical imgUrl={pic03} date="Dec 18, 1011" text="Wear your Genes better!" />
          <Artical imgUrl={pic04} date="Dec 18, 1011" text="Wear your Genes better!" />
          <Artical imgUrl={pic05} date="Dec 18, 1011" text="Wear your Genes better!" />
          
        </div>
      </div>
    </div>
  )
}

export default Blog;