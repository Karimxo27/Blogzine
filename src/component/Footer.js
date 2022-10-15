import L from "../images/logo-footer.svg"
import Appstore from "../images/app-store.svg"
import Googleplay from "../images/google-play.svg"
import { Component } from "react";
class Footer extends Component{
    render()
    {
        return<div className="footer">
        <div className="container">
            
            <div className="row f1">
                <div className="col-lg-4">
                    <a href="#"><img src={L}/></a>
                </div>
                <div className="col-lg-4">
                <p>The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
                </div>
                <div className="col-lg-4">
                <input type="text" placeholder="Enter your Email Adress"/>
                <button className="btn btn-primary subs2"> Subscribe </button>
                <p className="pp">by subscribing you agree to our <a href="#">Privacy Policy</a> </p>
                </div>
            </div>
            <hr/>
            <div className="row f2">
                <div className="col-lg-3">
                    <div className="row">
                        <h2>Recent post</h2>
                        <button className="btn btn-danger bus">Business</button>
                        <a href="#" className="ank">Up-coming Business Bloggers you need to follow</a>
                        <a href="#" className="ank2"> by: <span>Dennis </span> -</a>
                        <p className="dtt">Apr 06, 2022</p>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary bus2">Marketing</button>
                        <a href="#" className="ank">How did we get here? The history of the business told through tweets</a>
                        <a href="#" className="ank2"> by: <span>Lary </span> -</a>
                        <p className="dtt">May 26, 2022</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h2>Navigation</h2>
                    <div className="row">
                       <div className="col-6">
                            <a href="#" className="ss">Features</a>
                            <a href="#" className="ss">Style Guide </a>
                            <a href="#" className="ss">Contact Us </a>
                            <a href="#" className="ss">Get theme </a>
                            <a href="#" className="ss">Support </a>
                            <a href="#" className="ss">Privacy Policy </a>
                            <a href="#" className="ss">Newsletter </a>
                        </div>
                       <div className="col-6">
                            <a href="#" className="ss">News </a>
                            <a href="#" className="ss jj">Career </a> <button className="btn btn-danger">2 Jobs</button>
                            <a href="#" className="ss">Technologhy </a>
                            <a href="#" className="ss">Startups </a>
                            <a href="#" className="ss">Gadgets </a>
                            <a href="#" className="ss">Inspiration </a>
                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-3">
                    <h2>Get Regualr updates</h2>
                    <a href="#" className="updates"> <i class="bi bi-whatsapp"></i> Whatsapp </a>
                    <a href="#" className="updates"> <i class="bi bi-youtube"></i> Youtube </a>
                    <a href="#" className="updates"> <i class="bi bi-bell"></i> Website Notifacations </a>
                    <a href="#" className="updates"> <i class="bi bi-envelope"></i> Newsletters </a>
                    <a href="#" className="updates"> <i class="bi bi-headphones"></i> Podcasts </a>
                </div>
                <div className="col-lg-3">
                    <h2>Our Mobile App</h2>
                    <p>Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
                    <a href="#" className="L2" > <img src={Appstore}/> </a>
                    <a href="#" className="L2"> <img src={Googleplay}/> </a>
                </div>
            </div>
              <div className="f3">
            
                    <h2>Hot Topics</h2>    
                    <a href="#" className="ht">Covid-19 </a>
                    <a href="#" className="ht">Politics </a>
                    <a href="#" className="ht">Entratinment </a>
                    <a href="#" className="ht">Media </a>
                    <a href="#" className="ht">Royalist </a>
                    <a href="#" className="ht">World </a>
                    <a href="#" className="ht">Half Full </a>
                    <a href="#" className="ht">Scouted </a>
                    <a href="#" className="ht">Travel </a>
                    <a href="#" className="ht">Beast Inside </a>
                    <a href="#" className="ht">Crossward </a>
                    <a href="#" className="ht">Newsletters </a>
                    <a href="#" className="ht">Podcasts </a>
                    <a href="#" className="ht">Auction 2022 </a>
                    <a href="#" className="ht">Protests </a>
                    <a href="#" className="ht">Newscyber </a>
                    <a href="#" className="ht">Education </a>
                    <a href="#" className="ht">Sports </a>
                    <a href="#" className="ht">Tech and Auto </a>
                    <a href="#" className="ht">Share Market </a>
               
             </div>
          </div>
        </div>
    }
}
export default Footer;