import { Component } from "react";
import A from "../images/07.jpg"
import Ai from "../images/08.jpg"
import Aii from "../images/09.jpg"
import Aiii from "../images/10.jpg"
import Av from "../images/11.jpg"

class News extends Component{
    render()
    {
        return<div className="sponsored">
           <h1>  <i class="bi bi-megaphone"></i> Sponsored News</h1>
           <a href="#" id="content"> Content by: Bootstrap</a>
        <div className="clear"></div>
      <div className="container">
      <div className="row swiper">
        <div className="col-lg-3">
            <img src={Ai}/>
            <p>Skills that you can learn from business</p>
            <h6>by Dennis . Jun 07, 2022 </h6>
        </div>
        <div className="col-lg-3">
            <img src={Aii}/>
            <p>This is why this year will be the year of startup</p>
            <h6>by Joan . Aug 07, 2022  </h6>
        </div>
        <div className="col-lg-3">
            <img src={Aiii}/>
            <p>7 common mistakes everyone make while traveling</p>
            <h6>by Lori . Sep 07, 2022 </h6>
        </div>
        <div className="col-lg-3">
            <img src={A}/>
            <p>Skills that you can learn from business</p>
            <h6>by Samuel . Mar 07, 2022  </h6>
        </div>
        
      </div>
      </div>
      <div className="clear"></div>
    </div>
        
    }
}
export default News;



