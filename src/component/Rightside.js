import Pros from "../images/01.jpg"
import Reason from "../images/02.jpg"
import Five from "../images/03.jpg"
import Ten from "../images/04.jpg"
function Rightside(){
    return <div className="right">
    
      <div className="photos">
      <h4>Trending topics</h4>
      <div className="p1 hvr-grow"> <a href="#">Travel</a></div>
      <div className="p3 hvr-grow"> <a href="#">Business</a></div>
      <div className="p2 hvr-grow"> <a href="#">Marketing</a></div>
      <div className="p4 hvr-grow"> <a href="#">Photography</a> </div>
      <div className="p5 hvr-grow"> <a href="#">Sports</a></div>
     </div>
      <a href="#" id="Aa">View all categories</a>
    

      <div className="row recent">
          <h4>Recent Posts</h4>
          <div className="col-md-4">
            <img src={Pros}/> 
          </div>
          <div className="col-md-6">
          <h6>the pros and cons of business agency</h6>
          <p>May, 17, 2022</p>
          </div>
          <div className="col-md-3">
            <img src={Reason}/> 
          </div>
          <div className="col-md-8">
          <h6>5 Reasons why you shouldnt startup</h6>
          <p>May, 17, 2022</p>
          </div>
          <div className="col-md-4">
            <img src={Ten}/> 
          </div>
          <div className="col-md-8">
          <h6>Ten questions you should answer</h6>
          <p>May, 17, 2022</p>
          </div>
          <div className="col-md-4">
            <img src={Five}/> 
          </div>
          <div className="col-md-8">
          <h6>ive Unbelivable Facts about money</h6>
          <p>May, 17, 2022</p>
          </div>
         
      </div>
      <div className="adv"></div>
    </div>
}
export default Rightside;