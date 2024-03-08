import { getCategory } from "@/api/functions/shop.api";
import SingleCard from "@/components/SingleCard";
import { AllCategoryDtl } from "@/interface/catresp.interface";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const StyledContainer = styled("section")`
  margin: auto;
  margin-top: 20px;
  padding: 20px;
`;

const ClientfeedWrapper = styled(Box)`
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
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const Home = ({ allcategory }: categoryList) => {
  console.log(allcategory, "allcategory");
  return allcategory ? (
    <Wrapper>
      <StyledContainer>
        <ClientfeedWrapper>
          <Box className="cientfeedback-sec">
            <Container fixed>
              <Box className="clientfed-slider">
                <Slider {...sliderSettings}>
                  {Array.isArray(allcategory) &&
                    allcategory?.map((item, index) => (
                      <Box className="singlewrapslider" key={index}>
                        <SingleCard
                          cat_thumbnail={`${item?.cat_thumbnail as string}`}
                          cat_id={item.cat_id}
                          slug={item.slug}
                          title={item?.title}
                        />
                      </Box>
                    ))}
                </Slider>
              </Box>
            </Container>
          </Box>
        </ClientfeedWrapper>
      </StyledContainer>
    </Wrapper>
  ) : null;
};

interface categoryList {
  allcategory: AllCategoryDtl[];
}
export const getServerSideProps = async () => {
  const resp = await getCategory();
  console.log("all", resp);

  return {
    props: { allcategory: resp.all_category_dtls || [] }
  };
};
export default Home;