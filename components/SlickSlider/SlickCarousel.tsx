import React from "react";
import Slider from "react-slick";
import styles from "../../styles/pages/home.module.scss";
import { getCategory } from "@/api/functions/shop.api";
import { CategoryRoot } from "@/interface/catresp.interface";
import { Box } from "@mui/material";
import SingleCard from "../SingleSlider/SingleSlider";

const sliderSettings = {
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

interface categoryProps {
  allcategory: CategoryRoot;
}
interface catItemProps extends React.ComponentProps<typeof Slider> {
  children: React.ReactNode;
  allcategory: CategoryRoot;
}

const SlickCarousel = ({ children, allcategory }: catItemProps) => {
  return (
    <div className={styles.image_slider_container}>
      <Slider {...sliderSettings}>
        {allcategory?.all_category_dtls?.map((item, index) => (
          <Box className="singlewrapslider" >
            <SingleCard
              img={`${item?.cat_thumbnail as string}`}
              name={item.title}
              
            />
            {children}
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export const getServerSideProps = async () => {
  const resp = await getCategory();

  return {
    props: { allcategory: resp }
  };
};

export default SlickCarousel;
