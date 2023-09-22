import React from 'react'
import './Homepage.css';
import cloud from '../../resources/cloud.png';
import search from '../../resources/search.svg';
import redBackground from '../../resources/Rectangle1.svg';
import redCar from '../../resources/image 2.png';
import arrow from '../../resources/arrow.svg';
import leftArrow from '../../resources/leftArrow.svg';
import redTree from '../../resources/image 4.png';
import personOnBike from '../../resources/personOnBike.png';
import dog from '../../resources/dog.png';
import curtain from '../../resources/curtainBlue.png';
import painting from '../../resources/painting.png';
import matches from '../../resources/matches.png';
import blue from '../../resources/blueBluer.png';
import flight from '../../resources/flightAttendant.png';
import sofa from '../../resources/sofa.png';
import woman from '../../resources/woman.png';
import desert from '../../resources/desert.png';
import books from '../../resources/books.png';
import womanDance from '../../resources/womanDance.png';
import wedding from '../../resources/wedding.png';
import leagueOfLegends from '../../resources/LeagueOfLegends.png';
import hands from '../../resources/hands.png';
import hiv from '../../resources/HIV.png';
import whiteSofa from '../../resources/sofaWhite.png';
import beach from '../../resources/beach.png';
import roof from '../../resources/roof.png';
import coffee from '../../resources/coffee.png';
import star from '../../resources/star.png';

function Homepage() {
  return (
    <section className='content-section'>
      <div className='link-parent'>
        <div className='link-container prevent-wrap'>
          <div className='link-styling'>
            <a className='bold'>News</a>
            <a>Sex</a>
            <a>Special Features</a>
            <a>Technology</a>
            <a>Sport</a>
            <a className='border-none'>Analysis</a>
          </div>
          <div className='weather-styling'>
            <span className='weather'>
              <img src={cloud} />
              <span className='remove-padding'>&nbsp;28 &deg;, Sofia</span>
            </span>
            <img className='remove-padding' src={search} />
          </div>
        </div>
      </div>
      <section className='image-container'>
        <div className='red-car-container'>
          <img className='red-background' src={redBackground} />
          <div className='absolute-red'>
            <img className='red-car' src={redCar} />
            <span className='absolute-star'><img src={star} />FEATURED</span>
          </div>
          <div className='article-styling'>
            <span className='head-line-article'>Malaria vaccine to be tested on 4,800 children — UK scientist</span>
            <span>
              Accusamus dolores quia dolorem quidem a suscipit molestias expedita et.
              Est cum molestiae. Eligendi dolores sint quia velit velit qui odio ab.
            </span>
            <span className='article-button'>Read more</span>
          </div>
        </div>
        <div className="latest-news">
          <span className='latest-head-line'>Latest News</span>
          <div className="news-item">
            <span className='bold'>Doloremque ullam sed doloribus ut asperiores et sed in ut.</span>
            <div>Adebayo Folorunsho-Francis - Dec 7, 2020</div>
          </div>
          <div className="news-item">
            <span>Repellendus vel quisquam rerum iusto id quibusdam et est labore.</span>
            <div>Adebayo Folorunsho-Francis - Dec 7, 2020</div>
          </div>
          <div className="news-item">
            <span>Et dignissimos et autem voluptas et exercitationem eveniet eos voluptas.</span>
            <div>Adebayo Folorunsho-Francis - Dec 7, 2020</div>
          </div>
          <div className="news-item">
            <span>Tempore sed necessitatibus quae fugit consequatur qui laboriosam est eum.</span>
            <div>Adebayo Folorunsho-Francis - Dec 7, 2020</div>
          </div>
          <div className="news-item last-item">
            <span>Quaerat maxime placeat laboriosam odit ut animi aut laudantium.</span>
            <div>Adebayo Folorunsho-Francis - Dec 7, 2020</div>
          </div>
          <div className='flex'>See all latest news<img src={arrow}></img></div>
        </div>
      </section>
      <section className='breaking-section'>
        <div className='breaking-container'>
          <span className="breaking-news-item">
            <span className='bold'>WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa</span>
            <div>Yusuff Moshood - Dec 3, 2020</div>
          </span>
          <span className="breaking-news-item">
            <span className='bold'>This whitening cream can ruin your skin, make you blind, NAFDAC, others warn</span>
            <span>Yusuff Moshood - Dec 3, 2020</span>
          </span>
        </div>
        <div className='breaking-container'>
          <span className="breaking-news-item">
            <span className='bold'>WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa</span>
            <div>Yusuff Moshood - Dec 3, 2020</div>
          </span>
          <span className="breaking-news-item padding">
            <span className='red-styling'>
              <span className='bold' style={{ color: "#FFF" }}>This whitening cream can ruin your skin, make you blind, NAFDAC, others warn</span>
              <span>Yusuff Moshood - Dec 3, 2020</span>
            </span>
          </span>
        </div>
        <span className='relative'>
          <img className='red-tree' src={redTree} />
          <span className='absolute-arrow'><img src={leftArrow} />BREAKING</span>
        </span>
      </section>
      <section className='news-section'>
        <div className='headline-news-section'>
          NEWS
        </div>
        <div className='news-section-item' style={{ gridRow: '2 / span 1', gridColumn: '1 / span 1' }}>
          <img src={personOnBike} className='news-image' alt="Person on Bike" />
          <span className='text-styling'>Et ipsam deleniti mollitia iure</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item' style={{ gridRow: '2 / span 1', gridColumn: '2 / span 1' }}>
          <img src={dog} className='news-image' alt="Dog" />
          <span className='text-styling'>Et ipsam deleniti mollitia iure et incidunt assumenda expedita.</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item large' style={{ gridRow: '2 / span 2', gridColumn: '3 / span 1' }}>
          <img src={matches} className='news-image-large' alt="Matches" />
          <span class="open-sans">Adebayo Folorunsho-Francis - Dec 7, 2020</span>
          <span className='news-text-large'>At doloremque id voluptatum dignissimos unde est voluptatem.</span>
          <span className='padding-bottom'>
            Sit voluptatum suscipit sunt sed ut ratione alias. Dolorem culpa alias quos.
            Aliquid iusto laboriosam alias. Optio ullam molestiae et non repellendus sit iste.
          </span>
          <span className='news-arrow-styling'>Continue reading this article <img src={arrow} alt="Arrow" /></span>
        </div>
        <div className='news-section-item' style={{ gridRow: '3 / span 1', gridColumn: '1 / span 1' }}>
          <img src={curtain} className='news-image' alt="Curtain" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item' style={{ gridRow: '3 / span 1', gridColumn: '2 / span 1' }}>
          <img src={painting} className='news-image' alt="Painting" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </div>
      </section>
      <section className='sex-section'>
        <div className='headline-news-section'>SEX</div>
        <div className='sex-container'>
          <span className='news-section-item'>
            <img src={sofa} className='news-image' alt="Sofa" />
            <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
            <span>Dec 2, 2020</span>
          </span>
          <span className='news-section-item'>
            <img src={flight} className='news-image' alt="Flight Attendant" />
            <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
            <span>Dec 2, 2020</span>
          </span>
          <span className='news-section-item'>
            <img src={blue} className='news-image' alt="Blue" />
            <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
            <span>Dec 2, 2020</span>
          </span>
        </div>
      </section>
      <section className='technology-section'>
        <div className='headline-news-section'>
          Technology
        </div>
        <div className='news-section-item' style={{ gridRow: '2 / span 1', gridColumn: '3 / span 1' }}>
          <img src={books} className='news-image' alt="Woman" />
          <span className='text-styling'>Et ipsam deleniti mollitia iure et incidunt assumenda expedita.</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item' style={{ gridRow: '2 / span 1', gridColumn: '2 / span 1' }}>
          <img src={desert} className='news-image' alt="Desert" />
          <span className='text-styling'>Et ipsam deleniti mollitia iure</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item large' style={{ gridRow: '2 / span 2', gridColumn: '1 / span 1' }}>
          <img src={woman} className='news-image-large' alt="Library" />
          <span class="open-sans">Adebayo Folorunsho-Francis - Dec 7, 2020</span>
          <span className='news-text-large'>At doloremque id voluptatum dignissimos unde est voluptatem.</span>
          <span className='padding-bottom'>
            Sit voluptatum suscipit sunt sed ut ratione alias. Dolorem culpa alias quos.
            Aliquid iusto laboriosam alias. Optio ullam molestiae et non repellendus sit iste.
          </span>
          <span className='news-arrow-styling'>Continue reading this article <img src={arrow} alt="Arrow" /></span>
        </div>
        <div className='news-section-item' style={{ gridRow: '3 / span 1', gridColumn: '2 / span 1' }}>
          <img src={womanDance} className='news-image' alt="Dancing" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </div>
        <div className='news-section-item' style={{ gridRow: '3 / span 1', gridColumn: '3 / span 1' }}>
          <img src={wedding} className='news-image' alt="Wedding" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </div>
      </section>
      <section className='sport-section'>
        <div className='headline-news-section'>SPORT</div>
        <span className='news-section-item'>
          <img src={whiteSofa} className='news-image' alt="Sofa" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </span>
        <span className='news-section-item'>
          <img src={beach} className='news-image' alt="Flight Attendant" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </span>
        <span className='news-section-item'>
          <img src={roof} className='news-image' alt="Blue" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </span>
        <span className='news-section-item'>
          <img src={coffee} className='news-image' alt="Blue" />
          <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
          <span>Dec 2, 2020</span>
        </span>
      </section>
      <section className="background-styling">
        <div className='healthcare-section'>
          <div className='headline-news-section'>HEALTHCARE</div>
          <div className='sex-container'>
            <span className='news-section-item'>
              <img src={leagueOfLegends} className='news-image' alt="Healthcare" />
              <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
              <span>Dec 2, 2020</span>
            </span>
            <span className='news-section-item'>
              <img src={hands} className='news-image' alt="Healthcare" />
              <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
              <span>Dec 2, 2020</span>
            </span>
            <span className='news-section-item'>
              <img src={hiv} className='news-image' alt="Healthcare" />
              <span className='text-styling'>Asperiores sapiente alias voluptas quasi ratione quae dolorem.</span>
              <span>Dec 2, 2020</span>
            </span>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Homepage