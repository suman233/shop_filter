import {
  getCategory,
  getCategoryDetails,
  getCategoryWiseDetails
} from "@/api/functions/shop.api";
import ShopCard from "@/components/ShopCard/ShopCard";
import SlickCarousel from "@/components/SlickSlider/SlickCarousel";
import { AllCategoryDtl } from "@/interface/catresp.interface";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import { CategoryRoot } from "@/interface/catresp.interface";
import styles from "@/styles/pages/home.module.scss";
import { AllCatWiseRoot } from "@/interface/allcat.interface";
import { CatWiseRoot } from "@/interface/products.interface";
import SingleSlider from "@/components/SingleSlider/SingleSlider";
import ProductCard from "@/components/CardComponent/ProductCard";
import { useRouter } from "next/router";

const StyledContainer = styled("section")`
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  background: lightblue;
`;

// interface categoryList {
//   allcategory: AllCategoryDtl[];
// }

interface categoryProps {
  allcategory: CategoryRoot;
  catwiseData: AllCatWiseRoot;
  // productData: CatWiseRoot;
}

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

const settings = {
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
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

const Home = ({ allcategory, catwiseData }: categoryProps) => {
  console.log(allcategory, "allcategory");
  console.log(catwiseData, "categorywisedata");
  const router = useRouter();

  return (
    <Wrapper>
      <StyledContainer>
        {/* <ShopCard /> */}

        <div className={styles.image_slider_container}>
          <Slider {...sliderSettings}>
            {allcategory?.all_category_dtls?.map((item, index) => (
              <Box
                className="singlewrapslider"
                key={index}
                onClick={() => router.push(`/categorydetails/${item?.slug}`)}
              >
                <SingleSlider
                  img={`${item?.cat_thumbnail as string}`}
                  name={item?.title}
                />
              </Box>
            ))}
          </Slider>
        </div>
        {catwiseData.all_products?.map((item, i) => {
          return (
            <div className={styles.image_slider_container}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  my: 2,
                  color: "black"
                }}
              >
                {item?.title}
              </Typography>
              <Slider {...settings}>
                {item?.products?.map((product, index) => {
                  return (
                    <>
                      <Box
                        className="singlewrapslider"
                        key={index}
                        sx={{ my: 2, mx: 1 }}
                      >
                        <ProductCard
                          img={product?.product_meta_data[3]?.value?.image}
                          title={`${product?.product_name.slice(0, 35)}...`}
                          price={product.product_price}
                          description={product?.product_short_description}
                          prdlink={product?.product_link}
                          offerpirce={product.product_sale_price}
                        />
                      </Box>
                    </>
                  );
                })}
              </Slider>
            </div>
          );
        })}
      </StyledContainer>
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const categoryData = await getCategory();
  const categorydetailsData = await getCategoryDetails();
  // const  productData = await getCategoryWiseDetails();
  console.log("all", categoryData);

  return {
    props: { allcategory: categoryData, catwiseData: categorydetailsData }
  };
};
export default Home;
