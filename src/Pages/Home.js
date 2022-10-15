import Card from "../component/Card";
import i from "../images/p1.jpg"
import ii from "../images/p2.jpg"
import iii from "../images/p3.jpg"
import iv from "../images/p4.jpg"
import v from "../images/p5.jpg"
import vi from "../images/p6.jpg"
import { Component } from "react"
import News from "../component/News";
import Rightside from "../component/Rightside";
import Footer from "../component/Footer";
class Home extends Component { 
  render(){
    return<div>
     <div className="container ">
        <div className="row crd">
          <Card images={i} Z="12 worst types of business accounts you follow on Twitter" desc="He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to" by="by Samuel   (Jan 22, 2022)"/>
          <Card images={ii} Z="Dirty little secrets about the business industry" desc="Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor." by="by Dennis  (Mar 07, 2022)"/>
          <Card images={iii} Z="Bad habits that people in the industry need to quit" desc="Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor." by="Jun 17, 2022  (Jun 17, 2022)"/>
          <Card images={iv} Z="Around the web: 20 fabulous infographics about business" desc="Projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but." by="by Belly  (Dec 29, 2022)"/>
          <Card images={v} Z="7 common mistakes everyone makes while traveling" desc="Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted." by="by JAQUELENE  (Nov 11, 2022)"/>
          <Card images={vi} Z="5 investment doubts you should clarify" desc="Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal." by="by Carolyn  Sep 01, 2022"/>
        </div>
     <Rightside/>
    
   </div>
   <div className="clear"></div>
   <button className="btn btn-primary load">Load more post <i class="bi bi-arrow-down-circle"></i></button>
   <hr className="hr1"/>
   <News/>
   <Footer/>
  
   </div>
   
    
  
    
  }
}
 export default Home;