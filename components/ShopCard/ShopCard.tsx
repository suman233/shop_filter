import React from "react";
import { getCategory } from "@/api/functions/shop.api";
import { AllCategoryDtl, CategoryRoot } from "@/interface/catresp.interface";
import assest from "@/json/assest";
import { Box, Container, styled } from "@mui/material";
import Slider from "react-slick";
import SingleSlider from "../SingleSlider/SingleSlider";

const ShopCardWrapper = styled(Box)`
  padding: 80px 0;
  @media (max-width: 1199px) {
    padding: 60px 0;
  }
  @media (max-width: 600px) {
    padding: 40px 0;
  }
  .cientfeedback-sec {
    position: relative;
    .clientfed-slider {
      position: relative;
      margin-top: 40px;
      .slick-slider {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .slick-list {
          margin: 0 -30px;
          .singlewrapslider {
            padding: 0 30px;
          }
        }
        .slick-arrow {
          position: static;
          order: 2;
          transform: inherit;
          border: 1px solid var(--color4B72B2);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin: 60px 15px 0;
          &:hover {
            border-color: var(--black);
          }
          &:before {
            display: none;
          }
          &.slick-prev {
            background: url(${assest.sliderarwson}) no-repeat center;
            &:hover {
              background: url(${assest.sliderarwson}) no-repeat center
                var(--black);
            }
          }
          &.slick-next {
            background: url(${assest.sliderarwstw}) no-repeat center;
            &:hover {
              background: url(${assest.sliderarwstw}) no-repeat center
                var(--black);
            }
          }
        }
      }
    }
  }
`;

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

interface categoryType{
  allcategory: CategoryRoot
}

// interface categoryList extends React.ComponentProps<typeof Slider> {
//   children: React.ReactNode;
// }
const ShopCard = ({ allcategory }: categoryType) => {

  return allcategory ? (
    <ShopCardWrapper>
      <Box className="cientfeedback-sec">
        <Container fixed>
          <Box className="clientfed-slider">
            <Slider {...sliderSettings  } >
              {
                allcategory.all_category_dtls?.map((item, index) => (
                  <Box className="singlewrapslider" >
                    <SingleSlider
                      img={`${item?.cat_thumbnail as string}`}
                      
                      name={item?.title}
                    />
                  </Box>
                ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </ShopCardWrapper>
  ) : null;
};

export const getServerSideProps = async () => {
  const resp = await getCategory();

  return {
    props: { allcategory: resp }
  };
};

export default ShopCard;
