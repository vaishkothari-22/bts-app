import { Carousel, Row } from "react-bootstrap";
import img1 from '../Components/Slider/1.jpg';
import img2 from '../Components/Slider/2.jpg';
import img3 from '../Components/Slider/3.jpg';
import img4 from '../Components/Slider/4.jpg';
import img5 from '../Components/Slider/c.png';
import img6 from '../Components/Slider/c++.jpg';
import img7 from '../Components/Slider/java.png';
import img8 from '../Components/Slider/Asp.net.png';
import img9 from '../Components/Slider/Mysql.jpg';
import img10 from '../Components/Slider/html.jpg';
import img11 from '../Components/Slider/random.png';
import '../CSS/Home.css';


export function Home() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={require('../Components/Slider/1.jpg')} alt="First slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Welcome to Back to School </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} alt="Second slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt="Third slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} alt="Third slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

          {/*  1st card */}
            {/* <div className="container mt-5">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img5} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div> */}

                {/* 2nd card */}
                {/* <div className="row featurette container mt-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Second featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the second featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img6} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div>
            </div> */}

            {/* 3rd card */}
            {/* <div className="container mt-5">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img7} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div> */}

                {/* 4th card */}
                {/* <div className="row featurette container mt-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Second featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the second featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img8} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div>
            </div> */}


            {/* 5th card */}
            {/* <div className="container mt-5">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img9} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div> */}

                {/* 6th card */}
                {/* <div className="row featurette container mt-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Second featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the second featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img10} alt="Featurette Image" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                    </div>
                </div>
            </div> */}

            <Row>
<div class="col-md-4 mt-5 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">C</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto ">
            <img src={img5} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>


        <div class="col-md-4 mt-5 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">C ++ </h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto">
            <img src={img6} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>

       
        

        <div class="col-md-4 mt-5">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Java </h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto ">
            <img src={img7} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>

        </Row>

        <Row>

        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">ASP . Net</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto ">
            <img src={img8} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">My Sql</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto ">
            <img src={img9} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">HTML CSS</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                    {/* <use xlink:href="#chevron-right"></use> */}
                </svg>
              </a>
            </div>
            <div class="col-auto ">
            <img src={img10} alt="Featurette Image" width="300" height="350"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>

        </Row>

            <div>
                <img src={img11} alt="Your Image" className="img-fluid" />
            </div>
        </>



    );
}