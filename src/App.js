import logo from './logo.svg';
import React, { Component } from "react"
import './App.css';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";


class  App extends Component{
  constructor(props){
     super(props);
     this.state = {
         resume:null
     }
     
  }

componentDidMount(){
this.getResume();
}

async getResume(){
          //const myHeaders = {'Content-Type':'application/json'}
          //const myInit = {
          //method: "GET",
          //headers: {'content-type':'application/x-www-form-urlencoded'},
          //credentials: "include"
          //}
            const res = axios.get('https://sampleapidemo.azurewebsites.net/api/resume').then((r)=>{console.log(r.data)
                      this.setState({resume:r.data}
                        )
                        //console.log(r.data.length)
          }).catch((e)=>{console.log(e)});
 //           const res = await fetch('https://sampleapidemo.azurewebsites.net/api/resume',myInit)
            
           /* const instance = axios.create({
              baseURL: "https://sampleapidemo.azurewebsites.net/api/resume",
              withCredentials: false,
              headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            });
           const res =  instance({
              'method':'GET'
          })*/
           //console.log(instance)   
           //console.log(res);
           //console.log(res.json);
}

  render(){
  if(this.state.resume != null){
                     return(
                       <>
                     



<div>
<div class="container">

<div class="profile">
    <div class="profile-box">
    <div class="profile-head">
        <div class="profile-button"></div>
        <div class="profile-button"></div>
        <div class="profile-button"></div>
    </div>
    <div class="profile-photo">
        <p>Hai</p>
        
        <h2>I am {this.state.resume.basics.name}</h2>
        <p>I am a {this.state.resume.basics.label}</p>
        <p>Pursuing Bachelor's degree in {this.state.resume.education[0].area}</p>
    </div>
    </div>
    <svg class="frist-star" width="92" height="86" viewBox="0 0 92 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.1238 28.5011L79.9994 19.0556L64.8908 40.1112L64.2327 41.0284L65.2226 41.5711L88.3463 54.2486L61.7326 56.0669L60.6391 56.1416L60.8136 57.2237L64.8964 82.5464L46.7206 63.6566L46 62.9077L45.2794 63.6566L27.1036 82.5464L31.1864 57.2237L31.3609 56.1416L30.2673 56.0669L3.65369 54.2486L26.7774 41.5711L27.7673 41.0284L27.1092 40.1112L12.0006 19.0556L36.8762 28.5011L37.8639 28.8762L38.1842 27.8694L46 3.2989L53.8158 27.8694L54.1361 28.8762L55.1238 28.5011Z" fill="#54BA4E" stroke="black" stroke-width="2"/>
    </svg>
    <div class="line"></div>
    <svg class="pencil" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.78974 22.9699L28.2649 2L34.9602 8.44256L13.6113 30.0441L2.59832 34.863C1.73379 35.2413 0.874543 34.3217 1.31062 33.4848L6.78974 22.9699Z" fill="#54BA4E" stroke="black" stroke-width="2"/>
        <path d="M24.7278 5.53708L31.2967 12.106" stroke="black" stroke-width="2"/>
        <path d="M22.075 7.81093L29.0229 14.5061" stroke="black" stroke-width="2"/>
        <path d="M6.78973 23.3489L8.91898 23.8599C9.5224 24.0047 9.94785 24.5444 9.94785 25.1649V25.1649C9.94785 25.9061 10.5487 26.507 11.2899 26.507H11.6082C12.4043 26.507 13.0883 27.072 13.2386 27.8538L13.6113 29.7915" stroke="black" stroke-width="2"/>
        <path d="M9.56888 24.3595L24.0962 10.0848" stroke="black" stroke-width="2"/>
        <path d="M12.727 26.886L27.0017 12.8639" stroke="black" stroke-width="2"/>
        <path d="M4.22955 28.7349C5.22144 28.9761 7.31827 30.0197 7.77046 32.2651" stroke="black" stroke-width="2"/>
    </svg>
    <svg class="arrow1" viewBox="0 0 100 100" >
            <path d="M41.5 0V59.1364H3" />
            <path d="M0.5 58.6364L8.75 53.8732L8.75 63.3995L0.5 58.6364Z" fill="black"/>
    </svg>    

</div>

<div class="name">
    <div class="name-box">
        <h1>Working in {this.state.resume.work[0].company}</h1>
        <div class="name-triange"></div>
    </div>
    <div class="name-shadow">     </div>
    <svg class="arrow2"  viewBox="0 0 92 66" >
        <path d="M29.5 60.5L21.25 55.7369L21.25 65.2631L29.5 60.5Z" fill="black"/>
        <path d="M91 0.5V26H1V60.5H25" fill="none"/>
    </svg>
    <img class="key" src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/key.svg" alt="key icon"/>
        
</div>

<div class="feild">
    <div class="feild-box">
        <h2>{this.state.resume.work[0].position}</h2>
        <div class="feild-triange"></div>
    </div>
    <div class="feild-shadow">     </div>
    <svg class="arrow3"  viewBox="0 0 110 100" >
        <path d="M88.5 55.5L96.75 50.7369L96.75 60.2631L88.5 55.5Z" fill="black"/>
        <path d="M1.5 0V22.5H107.5V55.5H91" fill="none"/>
    </svg>
    <img class="suitable" src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/suitable.svg" alt="suitable icon"/>
</div>

<div class="aboutme">
    <div class="title-aboutme">
        <p>About Me</p>
    </div>
    <p class="text-aboutme" >I have started my work from {this.state.resume.work[0].startDate} and I am {this.state.resume.work[0].summary}</p>
    <svg class="second-star" width="92" height="86" viewBox="0 0 92 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.1238 28.5011L79.9994 19.0556L64.8908 40.1112L64.2327 41.0284L65.2226 41.5711L88.3463 54.2486L61.7326 56.0669L60.6391 56.1416L60.8136 57.2237L64.8964 82.5464L46.7206 63.6566L46 62.9077L45.2794 63.6566L27.1036 82.5464L31.1864 57.2237L31.3609 56.1416L30.2673 56.0669L3.65369 54.2486L26.7774 41.5711L27.7673 41.0284L27.1092 40.1112L12.0006 19.0556L36.8762 28.5011L37.8639 28.8762L38.1842 27.8694L46 3.2989L53.8158 27.8694L54.1361 28.8762L55.1238 28.5011Z" fill="#54BA4E" stroke="black" stroke-width="2"/>
    </svg>

    <svg class="watch" width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0153 4.35114H3.771V12.7219L8.99237 18.6696L3.771 24.1767V33.6488H20.0153V24.1767L14.5038 18.6696L20.0153 12.7219V4.35114Z" fill="#54BA4E" stroke="black" stroke-width="2"/>
        <rect x="1" y="1" width="22.0763" height="4" fill="#F8D253" stroke="black" stroke-width="2"/>
        <rect x="1" y="34.6489" width="22.0763" height="4" fill="#F8D253" stroke="black" stroke-width="2"/>
       
    </svg>
    <svg class="watch soil" width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.17939" y="29.8053" width="1.01527" height="1.30534"/>
        <rect x="7.50763" y="10.6985" width="1.01527" height="1.30534"/>
        <rect x="10.0802" y="29.8053" width="1.01527" height="1.30534"/>
        <rect x="10.4084" y="10.6985" width="1.01527" height="1.30534"/>
        <rect x="8.62976" y="26.6145" width="1.01527" height="1.30534"/>
        <rect x="8.95801" y="7.50763" width="1.01527" height="1.30534"/>
        <rect x="12.9809" y="29.8053" width="1.01527" height="1.30534"/>
        <rect x="13.3091" y="10.6985" width="1.01527" height="1.30534"/>
        <rect x="11.5305" y="26.6145" width="1.01527" height="1.30534"/>
        <rect x="11.8588" y="7.50763" width="1.01527" height="1.30534"/>
        <rect x="10.0802" y="23.4236" width="1.01527" height="1.30534"/>
        <rect x="10.0802" y="13.8511" width="1.01527" height="1.30534"/>
        <rect x="15.8817" y="29.8053" width="1.01527" height="1.30534"/>
        <rect x="16.2099" y="10.6985" width="1.01527" height="1.30534"/>
        <rect x="14.4313" y="26.6145" width="1.01527" height="1.30534"/>
        <rect x="14.7595" y="7.50763" width="1.01527" height="1.30534"/>
        <rect x="12.9809" y="23.4236" width="1.01527" height="1.30534"/>
        <rect x="12.9809" y="13.8511" width="1.01527" height="1.30534"/>
        <rect x="11.5305" y="20.2328" width="1.01527" height="1.30534"/>
        <rect x="11.5305" y="17.042" width="1.01527" height="1.30534"/>
    </svg>
 </div>

 <div class="rotation">
    <div class="ground-rotation">
        <div class="hit-rotation"></div>
        <svg class="circle-rotation" width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_4_3" fill="white">
            <path d="M53 27.0262C53 41.6618 41.1355 53.5262 26.5 53.5262C11.8645 53.5262 0 41.6618 0 27.0262C0 12.3907 11.8645 0.526245 26.5 0.526245C41.1355 0.526245 53 12.3907 53 27.0262ZM11.8469 27.0262C11.8469 35.1189 18.4073 41.6794 26.5 41.6794C34.5927 41.6794 41.1531 35.1189 41.1531 27.0262C41.1531 18.9336 34.5927 12.3731 26.5 12.3731C18.4073 12.3731 11.8469 18.9336 11.8469 27.0262Z"/>
            </mask>
            <path d="M53 27.0262C53 41.6618 41.1355 53.5262 26.5 53.5262C11.8645 53.5262 0 41.6618 0 27.0262C0 12.3907 11.8645 0.526245 26.5 0.526245C41.1355 0.526245 53 12.3907 53 27.0262ZM11.8469 27.0262C11.8469 35.1189 18.4073 41.6794 26.5 41.6794C34.5927 41.6794 41.1531 35.1189 41.1531 27.0262C41.1531 18.9336 34.5927 12.3731 26.5 12.3731C18.4073 12.3731 11.8469 18.9336 11.8469 27.0262Z" fill="#54BA4E" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_4_3)"/>
        </svg>
    </div>
 </div>  

 <div class="media" >
 <h3>Skills</h3>
</div>

<div class="media-grid">
   {this.state.resume.skills.map((u)=>(
     <>
     
     <div class="social-media-center">
        <a href="https://stackshare.io/stackups/django-vs-react-vs-javascript">
    <div class="social-media">
        <div class="social-image">
            <h4>{u.name}</h4>
        </div>
        <p>{u.level}</p>
        <h3></h3>
        
        <div class="click-here"> {u.keywords.map((k)=>(
          <>
          <p>{k}</p>
          </>
        ))} </div>
    </div>
    </a>
    </div>
   
     </>
   ))}
   
    

   

</div>

<div class="rotation">
    <div class="happy-man">
        <div class="line-animation">
            <img class="happy-man-icon" src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/happy-man-icon.svg" alt="happy man icon"/>
        </div>
    </div>

</div>

<div class="media">
    <h3>contact me</h3>
   </div>

<div class="contact-father" >
    <div class="contact">
        <a href="#">
       <div>
           <img src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/mobile.svg" alt="nasser toghiri mobile"/>
       </div>
        </a>
        <a href="#">
       <div>
        <img src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/telegram.svg" alt="nasser toghiri telegram"/>
       </div>
        </a>
        <a href="#">
       <div>
        <img src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/skype.svg" alt="nasser toghiri skype"/>
       </div>
        </a>
        <a href="#">
       <div>
        <img src="https://raw.githubusercontent.com/nasser-toghiri/instagram-bio-link/master/assets/whatsapp.svg" alt="nasser toghiri whatsapp"/>
       </div>
        </a>
    </div>
    <svg class="arrow5"  viewBox="0 0 100 100" >
                <path d="M13 1.5H1V35H50V45.5H13V59.5H66.5" fill="none" />
                <path d="M73 59.6364L64.75 54.8732L64.75 64.3995L73 59.6364Z" fill="black"/>
    </svg>
</div>


<div class="number">
    <a href="tel:+989184023184">
    <div class="number-box">
        <div class="number-triange"></div>
        <h4>Email</h4>
    </div>
    <div class="number-shadow">     </div>
    </a>
    <svg class="arrow6"  viewBox="0 0 100 100">
        <path d="M37 1H45V32H23.5V41H45V50.5H2.5" fill="none"/>
        <path d="M-2.40413e-07 50.5L8.25 45.7369L8.25 55.2631L-2.40413e-07 50.5Z" />
    </svg>
</div>


<div class="email">
    <a href="mailto:n.toghiri@gmail.com">
    <div class="email-box">
        <div class="email-triange"></div>
        <h4>{this.state.resume.basics.email}</h4>
    </div>
    <div class="email-shadow"> </div>
    </a>
</div>

</div>
</div>



</>


                     )
  }else{  

const loading = true;
const color = 'red';
  return (
    <div className="some">
  <ClipLoader color={color} loading={loading} size={150} />     
    </div>

    

  );
  }
  }
}

export default App;
