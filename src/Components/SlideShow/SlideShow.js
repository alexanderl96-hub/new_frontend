import React, {useState, useEffect, useRef}from 'react'
import './SlideShow.css'

const SlideShow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    // const colors = ["#0088FE", "#00C49F", "#FFBB28", '#5D3C81', '#00FF87', '#05F3FF', '#EAFF00'];
    const colors = ["https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/shajyekkuyuiubs9bmdg",
     "https://www.teamusa.org/-/media/TeamUSA/Baseball/Misc/usabaseball_111719_1440x810_Updated.png", 
     "https://images.squarespace-cdn.com/content/v1/56faeb1160b5e91eb04bfd6e/1467303830846-ZZGKHQK9TDAMT3LNYYDH/image-asset.jpeg?format=800w",
      'https://img.mlbstatic.com/opprops-images/image/private/t_16x9/w_640/opprops/zolfnb3oeqefpaubmsma.jpg', 
      'https://sportshub.cbsistatic.com/i/r/2021/07/02/053887ad-e4d3-4227-aecc-cfe1e1a6b4ef/thumbnail/1200x675/d4d7f9d1909b4b6f7ea5bd5445100be5/teamusa.jpg',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldXRkdqUGAHkPLYcxOskO_tsdbsvxtfy5aw&usqp=CAU', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpr7HXXo62XCZGP78AndcuOSNh0uvzZLdF4w&usqp=CAU',
      'http://baseballhotcorner.com/wp-content/uploads/2015/01/Orioles-Spring-Training.jpg',
       'https://www.nationalreview.com/wp-content/uploads/2021/07/cleveland-indians-players.jpg?fit=789%2C460', 
       'https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc3NTExNDM2NDMwMzU0MjM5/cleveland-hat.jpg', 
       'https://www.nbcsports.com/sites/rsnunited/files/article/hero/getty-usa-bryce-harper-paul-goldschmidt-mike-trout.jpg', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NUnEJs2B38JxxkjSvpQqn6tqEsrQFqkjOQ&usqp=CAU',
        'https://media.npr.org/assets/img/2019/10/18/gettyimages-1181439036_wide-323587b07afdb314a235148bd7d4e7b083c16003-s1400-c100.jpg', 
        'https://miro.medium.com/max/1400/1*VBNQk6nTmqp-MqGvYCTFlg.jpeg'];
    const delay = 6000;


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  
  return (
         <div className="slideshow">
                    <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(`+ backgroundColor+ `)`, aspectRatio: '16/9',
                         backgroundPosition: 'center',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'}}
                    ></div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                    ))}
                </div>
                </div>
 );
}

export default SlideShow