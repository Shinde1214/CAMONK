import React from 'react'
import baroda from './baroda.png'
import Viraj from './Viraj.jpg'
import infosys from './infosys.jpg'
import EY from './EY.png'
import Gail from './Gail.png'
import cipla from './cipla.png'
import godrej from './godrej.jpg'
import Banking from './Banking.png'
import nb1 from './nb1.png'
import nb2 from './nb2.png'
import nb3 from './nb3.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import CATree from './CA Tree.jpeg'
import Jm from './JPMorgan.jpeg'
import IP from './IP.png'
import Cap from './Cap.jpg'
import AxisBank from './Axis Bank.jpeg'
import UPSKILL from './UPSKILL.png'
import Mentors from './Mentors.png'
import Free from './Free Courses.png'
import PD from './PD.png'
import mentorship from './mentorship.png'
import BDO from './BDO.jpeg'
import PWC from './PWC.jpeg'
import Reliance from './Reliance.jpeg'
import accenture from './accenture.jpeg'
import Tic from './Tic.png'
import Phonepe from './PhonePe-Logo.png'
import Grant from './Grant.png'
import xyz from './xyz.jpg'
import App from './App.jpg'
import Google from './Google.png'
import Blogs1 from './Blogs1.jpeg'
import Blogs2 from './Blogs2.jpeg'
import Blogs from './Blogs.jpeg'
export default function Home() {
    return (
        <div>
            <section className='Home' style={{ backgroundColor: '#3368FF', paddingTop: '10px' }}>
                <p className='text-white text-center d-inline' style={{ height: '10px', fontSize: '13px', paddingLeft: '35%' }}>LIVE Interview Preparation Workshop Starting 15th July</p><span><button class="btn btn-primary shadow-none" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', marginLeft: '20px', height: '40px', marginBottom: '10px' }}>Enroll Now <i class="ri-arrow-right-line"></i></button></span>
                {/* Navbar */}
                <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#fff' }}>
                    <div class="container-fluid">
                        <a class="navbar-brand ms-5" style={{ fontWeight: '700' }} href="#"><bold>CA MONK</bold>  <img src={CATree} style={{ height: '30px', borderRadius: '30px', marginLeft: '10px' }}></img> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Interview Prep
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Masterclass
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        UpSkill
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tool
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hire From Us</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <span className='me-4 fs-4'><i class="ri-shopping-cart-fill"></i></span>

                                <button class="btn btn-primary shadow-none" style={{ width: '100px' }}>Login</button>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* Home page */}
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-6 col-sm-6 d-flex align-items-center '>
                            <div className='left text-white' style={{ marginTop: '-80px' }}>
                                <h1>Skyrocket Your <br /> Finance Career</h1>
                                <p className='mt-4 lh-1.5'>Learn industry-relevent skills from top mentors.<br /> Network with aspirational peer group</p>
                                <button type='button' className='btn text-white shadow-none mt-3' style={{ backgroundColor: '#FF7D33 ', width: '270px', height: '50px', borderRadius: '20px' }}>View courses</button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='rigth'>
                                <img src={mentorship} alt='img' style={{ width: 'auto', height: '550px', position: 'relative' }} />
                            </div>
                            <div>
                                <img src={Jm} className='img-thumbnail' alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '420px', marginTop: '-510px', borderRadius: '10px' }}></img>
                                <div>
                                    <img src={AxisBank} alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '450px', marginTop: '-330px', borderRadius: '10px' }}></img>
                                </div>
                                <div>
                                    <img src={BDO} alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '480px', marginTop: '-420px', borderRadius: '10px' }}></img>
                                </div>
                                <div>
                                    <img src={Reliance} alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '10px', marginTop: '-510px', borderRadius: '10px' }}></img>
                                </div>
                                <div>
                                    <img src={PWC} alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '-70px', marginTop: '-420px', borderRadius: '10px' }}></img>
                                </div>
                                <div>
                                    <img src={accenture} alt='img' style={{ height: '50px', marginBottom: '100px', position: 'absolute', marginLeft: '-30px', marginTop: '-330px', borderRadius: '10px' }}></img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section><br />

            <section className='Home'>
                <h2 style={{ textAlign: 'center' }}>
                    <hr className=' center text-black'></hr><span style={{ backgroundColor: 'white', position: 'absolute', marginTop: '-35px', paddingLeft: '10px', marginLeft: '-100px', textAlign: 'center', paddingRight: '10px' }}>Get Hire By</span></h2><br />
                <div className='row' style={{ textAlign: 'centre' }}>
                    <img src={baroda} className='logo' alt='' style={{ height: '100px', width: '150px', margin: '25px' }} />
                    <img src={Viraj} className='logo' alt='' style={{ height: '70px', width: '150px', margin: '30px' }} />
                    <img src={infosys} className='logo' alt='' style={{ height: '90px', width: '150px', margin: '25px' }} />
                    <img src={EY} className='logo' alt='' style={{ height: '50px', width: '130px', margin: '40px' }} />
                    <img src={Gail} className='logo' alt='' style={{ height: '50px', width: '150px', margin: '50px' }} />
                    <img src={cipla} className='logo' alt='' style={{ height: '70px', width: '150px', margin: '40px' }} />
                    <img src={godrej} className='logo' alt='' style={{ height: '120px', width: '150px', margin: '10px' }} />
                </div><br /><br />
            </section>
            {/* second */}
            <div className='container mt-5' >
                <div className='row d-flex'>
                    <div className='col-md-6'>
                        <div className='rigth'>
                            <img src={Banking} className='img-thumbnail' alt='img' style={{ width: 'auto', height: '550px' }} />
                            {/* <button type='button' className='btn text-white shadow-none mt-3' style={{ backgroundColor: '#FF7D33 ', width: '200px', height: '50px', borderRadius: '20px',margin:'150px', }}>View courses</button> */}

                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 d-flex align-items-center '>
                        <div className='right text-black' style={{ padding: '70px' }}>
                            <h1>Achieve Your Goals<br />With CA MONK</h1><br />
                            <h4><img src={Tic} style={{height:'30px'}}></img><span>    Get 1:1 Mentorship by Top 1%</span> <br /><br /><img src={ Tic } style={{height:'30px'}}></img> <span>   Network with aspirational Peer Group </span><br /><br /> <img src={Tic } style={{height:'30px'}}></img><span>    Get Interview Ready</span> <br /><br /> <img src={ Tic } style={{height:'30px'}}></img><span>   Undertake Structured Courses by Experts</span> <br /><br /> <img src={ Tic }style={{height:'30px'}} ></img><span>   Crack your Dream Job Role</span></h4>
                        </div>
                    </div>
                </div>
            </div><br /><br />

            {/* Third */}
            <section>
                <div className='home' style={{ backgroundColor: '#fff ' }}>
                    <div className='right text-black' style={{ padding: '30px' }}>
                        <h2 className='shadow-none mt-' style={{ marginLeft: '150px' }}>Explore Courses By Categories</h2>
                        <p className='mt-3 1h-1.5' style={{ marginLeft: '150px' }}> Discover Courses Aligned With Your Interests</p>
                    </div>
                    <div class="explore-card-content" style={{ backgroundColor: ' ', boxSizing: 'border-box', padding: '20px', alignItems: 'center', justifycontent: 'center' }}>
                        <div className='row d-flex'>
                            <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '180px', justifyContent: 'space-evenly', backgroundColor: ' skyblue' }}>
                                <div className='rigth'>
                                    <img src={IP} style={{ marginLeft: '60px', height: '70px' }}></img>
                                    <h5 style={{ marginLeft: '30px' }}>Interview Prep</h5>
                                    <p className='mt-0 1h-1' style={{ padding: '0px' }}>Cracking interview made easy</p>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '180px', justifyContent: 'space-evenly', backgroundColor: ' skyblue' }}>
                                <div className='rigth'>
                                    <img src={Cap} style={{ marginLeft: '40px', height: '70px' }}></img>
                                    <h5 style={{ marginLeft: '10px' }}>Masterclasses </h5>
                                    <p className='mt-0 1h-1' style={{ marginTop: '30px' }}>Build foundation of <br />technical & soft skills</p>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '180px', justifyContent: 'space-evenly', backgroundColor: ' skyblue' }}>
                                <div className='rigth'>
                                    <img src={UPSKILL} style={{ marginLeft: '20px', height: '70px', marginTop: '20px' }}></img>
                                    <h5 style={{ marginLeft: '30px', marginTop: '0px' }}>UpSkill </h5>
                                    <p className='mt-0 1h-1' style={{ marginTop: '50px' }}>Learn tools & skills<br /> for faster growth</p>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='row d-flex'>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '200px', backgroundColor: ' skyblue', justifyContent: 'space-evenly' }}>
                            <div className='rigth'>
                                <img src={Mentors} style={{ marginLeft: '10px', height: '70px', marginTop: '0px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '20px' }}>Mentorship </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Get 1:1 guidence from <br />industry exoerts</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '180px', justifyContent: 'space-evenly', backgroundColor: ' skyblue' }}>
                            <div className='rigth'>
                                <img src={Free} style={{ marginLeft: '70px', height: '80px', marginTop: '0px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '60px' }}>Free Courses </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Explore Free courses from CA Monk</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '250px', width: '280px', marginLeft: '180px', justifyContent: 'space-evenly', backgroundColor: ' skyblue' }}>
                            <div className='rigth'>
                                <img src={PD} style={{ marginLeft: '40px', height: '80px', marginTop: '30px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '10px' }}>Placement Drive </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Get placed at top <br />companies-SHAMBHAV</p>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br/><br/>
            </section>

            {/* Featured Courses */}
            <section className='Home' style={{ backgroundColor: '#3368FF', height: '750px' }}>
                <div className='col-md-12 col-sm-12 d-flex align-items-center'>
                    <div className='left text-black'>
                        <h2 style={{ marginLeft: '90px', paddingTop: '50px', color: 'white' }}>Featured Courses</h2>
                        <p className='mt-2 1h-1.5' style={{ marginLeft: '90px', marginBottom: '50px', color: 'white' }}> isn't learning and investment your future deserves?</p>
                        <div className='row d-flex'>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '410px', height: '500px', marginLeft: '100px', borderRadius: '20px' }}>
                                <div className='left text-black'>
                                    <img src={nb1} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginLeft: '0px', border: 'px solid', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px', marginTop: '-20px' }}>INTERVIEW PREP</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Getting Interview Ready Workshop</h6>
                                    <p className='mt-3 1h-1.5' style={{ marginLeft: '40px' }}> <i class="ri-group-line"></i>       Trusted by 12,000+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i>4299<span>     9999</span></h6><button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#3368FF ', width: '150px', height: '35px', margin: '10px', marginLeft: '210px', marginTop: '-60px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '410px', height: '500px', marginLeft: '50px', borderRadius: '20px' }}>
                                <div className='rigth text-black'>
                                    <img src={nb2} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginLeft: '0px', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px', marginTop: '-20px' }}>UPSKILL</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Financial Modeling Workshop</h6>
                                    <p className='mt-3 1h-1.5' style={{ marginLeft: '40px' }}><i class="ri-group-line"></i>      Trusted by 3,621+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i>1999</h6><button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#3368FF ', width: '150px', height: '35px', margin: '10px', marginLeft: '210px', marginTop: '-60px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '410px', height: '500px', marginLeft: '50px', borderRadius: '20px' }}>
                                <div className='rigth text-black'>
                                    <img src={nb3} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginRight: '50px', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px', marginTop: '-20px' }}>UPSKILL</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Microsoft Excel Mastery Workshop  </h6>
                                    <p className='mt-3 1h-1.5' style={{ marginLeft: '40px' }}> <i class="ri-group-line"></i>      Trusted by 5,587+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i> 599</h6><button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#3368FF ', width: '150px', height: '35px', margin: '10px', marginLeft: '210px', marginTop: '-60px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='row d-flex' style={{marginTop:'30px',backgroundColor:'#f1f2f7'}}>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{  marginLeft: '30px', justifyContent: 'space-evenly',borderRight:'1px solid',paddingTop:'20px'}}>
                            <div className='rigth'>
                                <h1 style={{marginLeft: '20px' }}>2.7+L </h1>
                                <p className='mt-0 1h-1'>Learning Hours</p>
                    
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{  height: '130px', width: '310px', marginLeft: '30px', justifyContent: 'space-evenly',borderRight:'1px solid', }}>
                            <div className='rigth'>
                                <h1 style={{ marginLeft: '10px' }}>1:1 </h1>
                                <p className='mt-0 1h-1'>Mentorship</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{  height: '130px', width: '300px', marginLeft: '60px', justifyContent: 'space-evenly', borderRight:'1px solid' }}>
                            <div className='rigth'>
                                <h1 style={{ marginTop: '0px', marginLeft: '0px' }}>500+ </h1>
                                <p className='mt-0 1h-1' >Mentors</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{   height: '130px', width: '280px', marginLeft: '80px', justifyContent: 'space-evenly' }}>
                            <div className='rigth'>
                                <h1 style={{ marginTop: '0px', marginLeft: '10px' }}>100+ </h1>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>companies Hiring</p>
                            </div>
                        </div>
                    </div>
            
            {/* Meet Your Mentors */}
            <section className='home'>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-6'>
                            <div className='rigth'>
                                <h2 style={{ paddingTop: '50px' }}>Meet Your Mentors </h2>
                                <p className='mt-2 1h-1.5' style={{ marginTop: '0px' }}> Not just any Mentor, You get a CA Monk Mentor</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 d-flex align-items-center '>
                            <div className='right text-black' style={{ padding: '0px' }}>
                                <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '180px', height: '40px', margin: '10px', marginLeft: '300px',marginRight:'0px' }}>View All Mentors</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="explore-card-content" style={{ boxSizing: 'border-box', padding: '20px', alignItems: 'center', justifycontent: 'center' }}>
                    <div className='row d-flex'>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '320px', width: '270px', marginLeft: '100px', backgroundColor: '#3368FF' }}>
                            <div className='rigth'>
                                <img src={mentorship} alt='img' style={{ width: '200px', height: '230px', marginLeft: '20px', borderRadius: '20px', marginTop: '-20px' }} />
                                <div>
                                    <h6 style={{ backgroundColor: 'white', border: '2px solid rgb(238,234,234)', borderRadius: '10px', paddingTop: '-10px', textAlign: 'center', width: '240px', height: '60px' }}>CA Anand Maheshwari <br />
                                        <span><img src={EY} style={{ height: '30px', width: '40px' }}></img>  </span>                                </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '320px', width: '270px', marginLeft: '80px', backgroundColor: '#3368FF' }}>
                            <div className='rigth'>
                                <img src={mentorship} alt='img' style={{ width: '200px', height: '230px', marginLeft: '20px', borderRadius: '20px', marginTop: '-20px' }} />
                                <div>
                                    <h6 style={{ backgroundColor: 'white', border: '2px solid rgb(238,234,234)', borderRadius: '10px', paddingTop: '-10px', textAlign: 'center', width: '240px', height: '60px' }}>CA Herleen kaur<br />
                                        <span><img src={Grant} style={{ height: '40px', width: '100px' }}></img>        </span>                                </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '320px', width: '270px', marginLeft: '80px', backgroundColor: '#3368FF' }}>
                            <div className='rigth'>
                                <img src={mentorship} alt='img' style={{ width: '200px', height: '230px', marginLeft: '20px', borderRadius: '20px', marginTop: '-20px' }} />
                                <div>
                                    <h6 style={{ backgroundColor: 'white', border: '2px solid rgb(238,234,234)', borderRadius: '10px', paddingTop: '-10px', textAlign: 'center', width: '240px', height: '60px' }}>CA Anikt Agarwal<br />
                                        <span><img src={Phonepe} style={{ height: '45px', width: '90px' }}></img>        </span>                                </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '320px', width: '270px', marginLeft: '80px', backgroundColor: '#3368FF' }}>
                            <div className='rigth'>
                                <img src={mentorship} alt='img' style={{ width: '200px', height: '230px', marginLeft: '20px', borderRadius: '20px', marginTop: '-20px' }} />
                                <div>
                                    <h6 style={{ backgroundColor: 'white', border: '2px solid rgb(238,234,234)', borderRadius: '10px', paddingTop: '-10px', textAlign: 'center', width: '240px', height: '60px' }}>CA Anmol Bedi<br />
                                        <span><img src={EY} style={{ height: '30px', width: '40px' }}></img>        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Home' style={{marginLeft:'1350px',padding:'0px'}}>
                    <i class='bx bxs-right-arrow-circle'></i>
                    </div>
                    {/* <div className='row d-flex'>
                        <div className='right text-black' style={{ marginLeft: '100px', marginTop: '30px', Color: '#3368FF' }}>
                            <i class="ri-arrow-left-circle-fill" style={{ height: '100px', width: '100px',marginLeft:'50px' }}></i>
                            <i class="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div> */}
                    <div>
                    </div>
                </div><br /><br /><br /><br />
            </section>

            {/* Six */}
            <section className='Home' style={{ backgroundColor: 'white', height: '700px' }}>
                <div className='col-md-12 col-sm-12 d-flex align-items-center'>
                    <div className='left text-black'>
                        <h2 style={{ marginLeft: '110px', paddingTop: '50px' }}>Free Courses</h2>
                        <p className='mt-2 1h-1.5' style={{ marginLeft: '110px', marginBottom: '50px' }}> Let the learning continue</p>
                        <div className='row d-flex'>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '450px', height: '500px', marginLeft: '100px', borderRadius: '20px' }}>
                                <div className='left text-black'>
                                    <img src={img1} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginLeft: '0px', border: 'px solid', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px' }}>INTERVIEW PREP</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Getting Interview Ready Workshop</h6>
                                    <p className='mt-2 1h-1.5' style={{ marginLeft: '40px' }}><i class="ri-group-line"></i>       Trusted by 12,000+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i>Free 4299</h6>
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: ' #3368FF', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '210px', marginTop: '-35px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '450px', height: '500px', marginLeft: '0px', borderRadius: '20px' }}>
                                <div className='rigth text-black'>
                                    <img src={img2} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginLeft: '0px', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px' }}>UPSKILL</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Financial Modeling Workshop</h6>
                                    <p className='mt-2 1h-1.5' style={{ marginLeft: '40px' }}><i class="ri-group-line"></i>        Trusted by 3,621+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i>Free  1999</h6>
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: ' #3368FF', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '210px', marginTop: '-35px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                            <div className='col-md-4' style={{ backgroundColor: 'white', width: '450px', height: '500px', marginLeft: '10px', borderRadius: '20px' }}>
                                <div className='rigth text-black'>
                                    <img src={img3} className='img-thumbnail' alt='img' style={{ width: '430px', height: '320px', marginRight: '50px', borderRadius: '20px' }} />
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '40px' }}>UPSKILL</button>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}>Microsoft Excel Mastery Workshop  </h6>
                                    <p className='mt-2 1h-1.5' style={{ marginLeft: '40px' }}><i class="ri-group-line"></i>      Trusted by 5,587+</p>
                                    <h6 className='shadow-none mt-' style={{ marginLeft: '40px' }}><i class="ri-money-rupee-circle-fill"></i>Free 599</h6>
                                    <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: ' #3368FF', width: '150px', height: '35px', margin: '10px', marginBottom: '30px', marginLeft: '210px', marginTop: '-35px' }}>Learn More <i class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br /><br /><br />

            {/* Seven */}
            <section className='Home' style={{ backgroundColor: '#3368FF', height: '750px' }}>
                <div className='col-md-12 col-sm-12 d-flex align-items-center'>
                    <div className='container mt-5' >
                        <div className='row d-flex'>
                            <div className='col-md-4 col-sm-4 d-flex align-items-center'>
                                <div className='left text-white' style={{ marginTop: '0px' }}>
                                    <h6>Testimonials</h6>
                                    <h1>What Our <br /> Student Have <br />To Say...</h1>
                                </div>
                            </div>
                            <div className='col-md-8 col-sm-6 d-flex align-items-center '>
                                <div className='left text-black' style={{ padding: '70px' }}>
                                    <div className='rigth' style={{ backgroundColor:'white',width: '750px', height: '330px', borderRadius: '30px' }} >
                                        <div>
                                        <img src={xyz} className='img-thumbnail' alt='img' style={{height:'140px',width:'140px',marginLeft:'30px',marginTop:'30px',borderRadius:'20px'}}/>
                                        <div>
                                            <h4 style={{marginLeft:'190px',marginTop:'-110px'}}>Kirti Agarwal</h4>
                                            <div>
                                            <h6 style={{marginLeft:'200px',marginTop:'-0px'}}>NTT DATA</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='mt-2 1h-1.5' style={{ marginLeft:'-20px',marginBottom:'50px',padding:'60px' }}> This platform assisted me in enhancing my profiles, expanding my reach, and upgrading my resume. Most importantly, it played a crucial role in helping me overcome my fear of public speaking through effective GD sessions and mock interviews.</p>
                                            <div className='right' style={{justifyContent:'space-evenly',position: 'relative',marginLeft:'50px',color:'#FF7D33',marginTop:'-80px'}}>
                                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><span style={{color:'black'}}>     4.7</span>
                                            </div>
                                         </div>
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className='right text-black' style={{ marginLeft: '100px', marginTop: '30px', Color: 'white', textAlign: 'center' }}>
                        <i class="ri-arrow-left-circle-fill" style={{ height: '30px', width: '50px' }}></i>
                        <i class="ri-arrow-right-circle-fill"></i>
                    </div>
                </div>
                <h3 className='left text-white' style={{ textAlign: 'center' }}>View All</h3>
            </section>

            {/* Eight */}
            <section className='Home'>
                <div className='container mt-5'>
                    <div className='row d-flex'>
                        <div className='col-md-6'>
                            <div className='rigth'>
                                <h2 style={{ paddingTop: '50px' }}>Blogs </h2>
                                <p className='mt-2 1h-1.5' style={{}}> Trending Finance topics</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 d-flex align-items-center '>
                            <div className='right text-black' style={{ padding: '0px' }}>
                                <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#FF7D33 ', width: '180px', height: '50px', margin: '10px', marginLeft: '300px' }}>View All Blogs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className='col-md-4'>
                        <div className='left text-black'>
                            <img src={Blogs1} className='img-thumbnail' alt='img' style={{ width: '410px', height: '450px', marginLeft: '100px', border: 'px solid', borderRadius: '20px' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='left text-black'>
                            <img src={Blogs2} className='img-thumbnail' alt='img' style={{ width: '410px', height: '450px', marginLeft: '50px', border: 'px solid', borderRadius: '20px' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='left text-black'>
                            <img src={Blogs} className='img-thumbnail' alt='img' style={{ width: '410px', height: '450px', marginLeft: '0px', border: 'px solid', borderRadius: '20px' }} />
                        </div>
                    </div>
                </div><br /><br />

            </section>

            {/* Nine */}
            <section className='Home' style={{ backgroundColor: 'black' }}>
                <div className='row d-flex'>
                    <div className='col-md-3 col-sm-6 d-flex align-items-center' >
                        <div className='left text-white' style={{ marginTop: '40px', marginLeft: '100px' }}>
                            <h5>Interview Prep </h5>
                            <p className='mt-3 lh-1.5'>Interview Preparation Workshop<br />Articleship Training Workshop<br />CA Monk Placement Drive<br />Company Guides<br />Aptitude Test<br /> Free Resources</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6 d-flex align-items-center'>
                        <div className='left text-white' style={{ marginTop: '40px' }} >
                            <h5>Masterclass</h5>
                            <p className='mt-3 1h-1.5'>Statutory Audit<br />Internal Audit<br />Finance<br />Direct Tax<br />Investment Banking<br />Management Consulting</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 d-flex align-items-center '>
                        <div className='left text-white'>
                            <h5 style={{ marginTop: '40px' }}>UpSkill</h5>
                            <p className='mt-3 1h-1.5'>Excel Mastery<br />Financial Modeling<br />Alteryx For Data Analytics<br />Pyhton For Finance<br />SAP FICO<br />Tableau</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-3 d-flex align-items-center '>
                        <div className='left text-white' style={{ marginTop: '40px' }}>
                            <h5><img src={CATree} style={{ height: '50px' }}></img>      CA MONK</h5>
                            <img src={App} style={{height:'50px',borderRadius:'10px',border:'1px solid'}}></img><span><img src={Google} style={{height:'50px',borderRadius:'10px',border:'1px solid',marginLeft:'20px'}}></img></span>
                            <h4 className='mt-3 1h-1.5'>Subscribe to our Newsletter</h4>
                            <input type='search' placeholder='Email'></input>                                        <button type='button' className='btn text-white shadow-none mt-' style={{ backgroundColor: '#3368FF ', width: '140px', height: '35px', margin: '10px',borderRadius:'10px' }}>Subscribes</button>
                            <p className='mt-2 1h-1.5'>Follow us on:     <i class="ri-youtube-fill"></i>   <i class="ri-instagram-line"></i>     <i class="ri-linkedin-fill"></i>    <i class="ri-telegram-fill"></i></p>
                        </div>
                    </div>
                </div><br /><br />
                {/* </div> */}
                <div className='row d-flex'>
                    <div className='col-md-3 col-sm-6 d-flex align-items-center' >
                        <div className='left text-white' style={{ marginTop: '0px', marginLeft: '100px' }}>
                            <h5>Popular Articles </h5>
                            <p className='mt-3 lh-1.5'>8 Mind Trick For Crushing Your Interviews<br />16 Behavioral Interview Question Big 4 Firms Ask<br />How Business Analytics Empowers CAs<br />Why CAs Should Learn Digital Marketing</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6 d-flex align-items-center' >
                        <div className='left text-white' style={{ marginBottom: '100px', marginLeft: '10px' }}>
                            <h5>Partnership </h5>
                            <p className='mt-3 lh-1.5'>Hire From CA Monk<br />Become A Mentor<br />CA Monk Placement Drive<br />Careers @ CA Monk</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6 d-flex align-items-center'>
                        <div className='left text-white' style={{ marginTop: '0px', marginBottom: '80px' }} >
                            <h5>Mentorship</h5>
                            <p className='mt-3 1h-1.5'>1:1 Mentorship<br />Student Mentorship<br />Resume Review<br />Mock Interview <br />Events</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-6 d-flex align-items-center '>
                        <div className='left text-white' style={{ marginBottom: '100px' }}>
                            <h5>Tools</h5>
                            <p className='mt-3 1h-1.5'>Resume Scorer<br />AI Interview Bot<br />Articleship Scorer<br />Salary Estimator</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-3 d-flex align-items-center '>
                        <div className='left text-white' style={{ marginTop: '10px' }}>
                            <h5>Resources</h5>
                            <p className='mt-3 1h-1.5'>Free Courses<br /> Finance Jobs<br /> Blog<br /> Testimonials<br /> Wall Of Fame <br />Verify Certificate<br /> Privacy Policy <br />Refund Policy <br /> Terms & Conditions</p>
                        </div>
                    </div>
                </div><br /><br />
                <p className='text-white text-center' style={{ height: '10px', fontSize: '13px' }}>Copyright © CA MONK. All rights reserved.</p><img src={CATree} style={{ height: '50px', borderRadius: '30px', marginLeft: '50px' }}></img><br /><br />
            </section>
        </div>
    )
}
