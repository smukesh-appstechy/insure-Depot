import React from 'react'
import alldata from "../../alldata.json";
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import BlogCard from '../Nested-pages/Blog/BlogCard';

const Home = () => {
  return (
    
        <>
        {/* hero section */}
        <section className='xl:py-20 lg:py-16 py-10 overflow-hidden' style={{"boxShadow":"0px 48px 41.1px -44px #00000012"}}>
          <div className="container relative m-auto lg:px-4 px-3">
            <img  className='absolute xl:right-0 right-[-80px] top-0 md:block hidden' src="/home/service-section/right-amb.png" alt="" />
            <img className="absolute xl:left-0 left-[-80px] bottom-0 xl:w-[250px] w-[200px] md:block hidden" src="/home/service-section/top-amb.png" alt="" />
            <div className="hero-wrapper xl:w-2/3 w-4/5 m-auto">
              <h1 className='lg:text-[56px] md:text-[36px] text-[30px] text-orange font-bold text-center leading-tight mb-4'>{alldata.page.homepage.herosection.heading.value}</h1>
              <hr className='border-t border-orange mb-4'/>
              <p className='lg:text-2xl md:text-xl text-[#8E8E93] text-center mb-10'>{alldata.page.homepage.herosection.para.value}</p>

              <form action="" className='w-4/5 m-auto grid grid-cols-2 gap-5 '>
                <input className='border border-[#FFCCAA] rounded-md lg:p-5 p-3  lg:text-[28px] md:text-xl text-base'  type="number" placeholder='Zip Code*'/>
                <input className='bg-orange border border-orange rounded-md lg:p-5 p-3 lg:text-[28px] md:text-xl text-base text-white cursor-pointer' type="submit" value="Get Quotes" />
              </form>
            </div>
          </div>
        </section>

          {/* how it work section */}
          <section className='xl:py-20 lg:py-16 py-10'>
            <div className="container m-auto lg:px-4 px-3">
                  <div className="section-heading text-center ">
                    <h2 className='lg:text-[44px] md:text-[36px] text-[30px] font-bold text-orange mb-4'>{alldata.page.homepage.howItWork.headingSection.heading.value}</h2>
                    <p className='lg:text-xl text-lg text-center mb-10 lg:w-2/4 md:w-3/4 m-auto'>{alldata.page.homepage.howItWork.headingSection.para.value}</p>
                  </div>
                  <div className="how-it-works grid  grid-cols-1 lg:grid-cols-3 xl:gap-32 lg:gap-20 gap-10 mb-10">
                    {alldata.page.homepage.howItWork.cardData.map((item, index)=>(
                          <HowItWork key={index} 
                          index={item.card.index.value}
                          heading={item.card.heading.value}
                          para={item.card.para.value}
                          uniqueIdentifer = {index}
                          />
                    ))}
                    
                  </div>
                  <div className="button-wrapper flex justify-center items-center gap-10">
                      <Link className='text-base font-bold'>Learn more</Link>
                      <Link className='bg-orange lg:py-5 py-3 lg:px-10 px-6 rounded-lg text-white text-base font-bold'>Get Started</Link>
                    </div>
            </div>
          </section>

          {/* life insurerance */}
          <section className='xl:py-20 lg:py-16 py-10'>
            <div className="container m-auto lg:px-4 px-3">
            <div className="section-heading text-center xl:mb-20 mb-10">
                    <h2 className='lg:text-[44px] md:text-[36px] text-[30px] font-bold mb-4'>{alldata.page.homepage.insurance.headingSection.heading.value}</h2>
                  </div>
                      <div className="isurance-wrapper grid xl:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-16  md:gap-12 gap-8">
                        {alldata.page.homepage.insurance.insuranceCards.map((item, index) =>(
                          <Insurefunction
                          index={item.card.index.value}
                          indexColor={item.card.indexColor.value}
                          cardImage={item.card.cardImage.value}
                          para={item.card.para.value}/>
                        ))}
                      </div>
            </div>
          </section>

           {/* why choose section */}
           <section className='xl:py-20 lg:py-16 py-10 bg-white'>
            <div className="container m-auto lg:px-4 px-3">
            {/* flex flex-wrap  justify-between gap-10 */}
                      <div className="isurance-wrapper flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                        {alldata.page.homepage.whyChooseUs.map((item, index) =>(
                          <WhyChoosefunction
                          image={item.card.image.value}
                          para={item.card.para.value}/>
                        ))}
                      </div>
            </div>
          </section>

          
          {/* service section */}
          <section className='xl:py-20 lg:py-16 py-10'>
            <div className="container m-auto lg:px-4 px-3">
            <div className="section-heading text-center mb-10">
                    <h2 className='lg:text-[44px] md:text-[36px] text-[30px] font-bold mb-4'>{alldata.page.homepage.ourService.serviceHeading.value}</h2>
                  </div>
                      <div className="isurance-wrapper grid grid-cols-1 xl:gap-20 ml:gap-16 gap-10">
                        {alldata.page.homepage.ourService.serviceCard.map((item, index) =>(
                          <OurServicefunction
                          logo={item.card.logo.value}
                          heading={item.card.heading.value}
                          para={item.card.para.value}
                          image={item.card.image.value}
                          index={index}/>
                        ))}
                      </div>
            </div>
          </section>

          {/* testimonial section */}
          <section className='xl:pt-20 lg:pt-16 pt-10 xl:pb-32 lg:pb-24 pb-20  bg-white teatimonial-section overflow-hidden'>
            <div className="container m-auto lg:px-4 px-3">
          <Testimonial/>
          </div>
          </section>

            {/*blog section */}
            <section className='xl:py-20 lg:py-16 py-10 teatimonial-section'>
            <div className="container m-auto lg:px-4 px-3">
            <div className="section-heading text-center mb-10">
                    <h2 className='lg:text-[44px] md:text-[36px] text-[30px] font-bold mb-4'>{alldata.page.homepage.blog.blogSectionTitle.value}</h2>
                  </div>
                  <div className="blog-head grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                  {alldata.page.homepage.blog.blogData.map((item, index)=>(
                <BlogCard
                image={item.featureImage.value}
                lastupdated={item.lastUpdatedDate.value}
                title={item.blogTitle.value}
                shortDis={item.blogShortDis.value}
                category={item.blogCategory.value}
                readTime={item.readTime.value}
                key={index}
                id={item.id.value}/>
              ))}
                  </div>
              
          </div>
          </section>
        </>
  )
}

export default Home

// how it work child component
function HowItWork({index,heading,para, uniqueIdentifer}){
  let randomNumber = Math.floor(Math.random() * 1803) + 1;
    return(
      <div className={`card custom-card-${uniqueIdentifer} flex lg:flex-col flex-row lg:gap-0 gap-4  lg:justify-center justify-start`}>
      <div className="setp m-auto mb-5 w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#FFB17C] flex-initial "><span className='text-white text-[28px]'>{index}</span></div>
        <div className='lg:text-center text-left flex-initial lg:w-full w-4/5'>
      <h3 className='lg:text-[28px] text-xl  mb-3 font-bold'>{heading}</h3>
      <p className='text-base lg:text-left '>{para}</p>
      </div>
    </div>               
    )
}

// insurance child component
function Insurefunction({index, indexColor, para, cardImage}){
  return(
        <div className="insure-card flex gap-10 justify-center">
      <div className={`step w-[130px] h-[130px] rounded-full border-[15px] ${indexColor === "#F49D1D" ? "border-[#F49D1D]" : indexColor === "#F26622" ? "border-[#F26622]" : indexColor === "#D35628" ? "border-[#D35628]" : indexColor === "#E77E24" ? "border-[#E77E24]" : ""} flex justify-center items-center`}>
      <span className='text-[44px]  font-medium'>{index}</span>
      </div>
      <div  className="step-text relative">
        <img className='w-[316px] h-full' src={cardImage} alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto w-52 flex items-center'>
        <p className=''>{para}</p>
        </div>
      
      </div>
    </div>
  )
}


// why choose child component
// function WhyChoosefunction({image, para}){
//   return(
//     <>    
//     <div className="w-[200px] flex-1 choose-card flex items-center gap-5 p-3 xl:p-5 border-r border-gray-300">
//       <img src={image} alt="" />
//       <span className='w-28 text-center'>{para}</span>
//     </div>
//     {/* <div className="line border-r border-gray-300"></div> */}
//     </>

//   )
// }

// why choose child component
function WhyChoosefunction({image, para}){
  return(
    <>    
    <div className="flex items-center space-x-3 w-full sm:w-auto">
      <img src={image} alt="" />
      <span className='sm:w-28 w-full sm:text-center text-left'>{para}</span>
    </div>
    <div className="hidden sm:block w-px bg-gray-300"></div>
    </>

  )
}

// service section
function OurServicefunction({logo, heading, para, image,index}){
  return(
    <>
    <div className="service-card grid lg:grid-cols-3 grid-cols-1  lg:gap-32">
      <div className={`txt-card col-span-2 bg-white lg:p-10 md:p-8 p-5 rounded-xl flex-1 ${index % 2 === 0 ? "" : "order-2"}`}>

        <div className="head flex lg:gap-5 gap-4 mb-5 items-center">
          <img src={logo} alt="" />
          <h4 className='lg:text-[28px] text-xl font-bold'>{heading}</h4>
        </div>
        <div className="para-wrapper">
        <p className='text-[#7E7E7E] text-lg mb-3'>{para}</p>
        <Link className=' font-bold text-orange'>Read more...</Link>
        </div>
       
      </div>
      <div className="image-wrapper lg:flex hidden items-center flex-1 text-center w-full justify-center">
        <img className='' src={image} alt="" />
      </div>
    </div>
    </>
  )
}