/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component } from "react";



class Card extends Component{
   

    render(){
       return  <div className="col-lg-6">
        <div class="card">
        <img src={this.props.images} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{this.props.Z}</h5>
            <p class="card-text">{this.props.desc}</p>
            <pre>{this.props.by}</pre>
            
        </div>
</div>
            
        </div>
        
    }
}
export default Card;
