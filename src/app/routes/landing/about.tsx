import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import Hero2 from '@/assets/images/about/hero_2.jpg';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  counters,
  galleryImages,
  listItems,
  testimonials,
  features,
} from '@/utils/constants';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const AboutRoute = () => {
  interface FeatureProps {
    icon: IconProp;
    title: string;
    description: string;
  }

  const FeatureItem = ({ icon, title, description }: FeatureProps) => (
    <div className="icon mb-4 flex items-center">
      <span className="icon-circle mr-4 text-success">
        {/* <FontAwesomeIcon icon={icon} className="mr-4 text-2xl icon-circle text-success" /> */}
        <i className={`text-2xl ${icon}`}></i>
      </span>
      <div>
        <h3 className="mb-2 font-montserrat text-xl leading-[1.2]">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );

  interface CounterProps {
    count: number;
    description: string;
    delay: number;
  }

  const CounterItem = ({ count, description, delay }: CounterProps) => (
    <div
      className="col-6 sm:col-sm-6 md:col-md-6 lg:col-lg-3"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="counter-wrap mb-12 lg:mb-0">
        <span className="number text-success">{count}</span>
        <span className="caption text-[rgba(0_0_0/.5)]">{description}</span>
      </div>
    </div>
  );

  interface TestimonialProps {
    image: string;
    name: string;
    position: string;
    message: string;
  }

  const TestimonialItem = ({
    image,
    name,
    position,
    message,
  }: TestimonialProps) => (
    <div className="col-md-4">
      <div className="testimony-wrap max-w-lg">
        <div className="icon mb-4 flex items-center justify-center text-3xl">
          {/* <span className="fa fa-quote-left"></span> */}
          <FontAwesomeIcon
            icon={'fa fa-quote-left' as IconProp}
            className="text-white"
          />
        </div>
        <div className="text">
          <p className="msg mb-6">{message}</p>
          <div className="flex items-center">
            <div
              className="user-img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="tx pl-4">
              <p className="name">{name}</p>
              <span className="position">{position}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head description="Welcome to Zeluxe Listings About Page" />
      <Header />
      <main>
        <div className="mt-12 pt-12">
          <div className="container mx-auto px-[15px]">
            <div className="row mb-12 text-left lg:flex-nowrap">
              <div className="col-lg-6">
                <h2 className="mb-[1.5rem] text-[32px] font-bold text-success">
                  About Us
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam enim pariatur similique debitis vel nisi qui
                  reprehenderit totam? Quod maiores.
                </p>
              </div>
            </div>

            <div className="row mb-12 justify-between lg:flex-nowrap">
              <div className="col-lg-7 mb-12 lg:mb-0">
                <div className="position-relative img-about dots">
                  <img
                    src={Hero2}
                    alt="Image"
                    className="mb-12 h-auto max-w-full rounded-lg lg:mb-0"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon as IconProp}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4">
              <div className="container mx-auto">
                <div className="row section-counter mt-12 lg:flex-nowrap">
                  {counters.map((counter, index) => (
                    <CounterItem
                      key={index}
                      count={counter.count}
                      description={counter.label}
                      delay={counter.delay}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className={`zeluxe-intro zeluxe-no-pt zeluxe-no-pb img mt-12 bg-[url('@/assets/images/about/bg_4.jpg')]`}
        >
          <div className="overlay"></div>
          <div className="container mx-auto py-[6.5rem]">
            <div className="row justify-center">
              <div className="lg:col-lg-10 xl:col-xl-8">
                <div className="row">
                  <div className="md:col-md-8 flex items-center">
                    <div>
                      <h1 className="mb-0 text-[40px] font-bold text-white">
                        Find Best Place For Living
                      </h1>
                      <p className="text-white">Find Best Place For Living</p>
                    </div>
                  </div>
                  <div className="md:col-md-4 flex items-center">
                    <p className="mb-0">
                      <Link
                        to="/contact"
                        className="btns btns-dark px-6 py-4 hover:text-white"
                      >
                        Get in touch
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="zeluxe-section testimony-section bg-light">
          <div className="container mx-auto">
            <div className="row justify-center pb-6">
              <div
                className="md:col-md-7 heading-section text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="subheading">Testimonial</span>
                <h2 className="mb-4 text-center text-[32px]">
                  Clients We Help
                </h2>
              </div>
            </div>

            <div className="row">
              <div
                className="md:col-md-12"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div
                  id="carouselTestimony"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselTestimony"
                      data-slide-to="0"
                      className=""
                    ></li>
                    <li
                      data-target="#carouselTestimony"
                      data-slide-to="1"
                      className="active"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        {testimonials.map((testimonial, index) => (
                          <TestimonialItem
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            position={testimonial.position}
                            message={testimonial.text}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION */}
        <div className="pt-12">
          <div className="container mx-auto">
            <div className="row">
              {/* <!-- Left Column --> */}
              <div className="col-lg-6 mb-6 lg:pr-12">
                <h3 className="mb-2 font-montserrat text-[1.75rem] font-bold leading-[1.2] text-success">
                  Why Choose Homes
                </h3>
                <h4 className="mb-2 text-2xl leading-[1.2]">
                  Because we are the best in the business
                </h4>
                <p className="mb-4 mt-0 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              {/* <!-- Right Column --> */}
              <div className="col-lg-5 lg:pl-12" style={{ marginLeft: 'auto' }}>
                <ul className="">
                  {listItems.map((item) => (
                    <li className="mb-4" key={item.id}>
                      <i className={`mr-2 ${item.icon} text-success`}></i>
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Gallery section */}
        <section className="zeluxe-gallery mt-12">
          <div className="container mx-auto">
            <div className="row no-gutters flex-col md:flex-row">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="md:col-md-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <Link
                    to="#"
                    className="gallery-wrap img glightbox flex flex-col items-center justify-center md:flex-row"
                    style={{ backgroundImage: `url(${img.imageUrl})` }}
                  >
                    <div className="icon flex items-center justify-center">
                      <span className="fa fa-search" aria-hidden="true">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* END OF GALLERY SECTION */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
