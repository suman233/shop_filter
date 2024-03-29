import {
  getCategory,
  getCategoryDetails,
  getCategoryWiseDetails
} from "@/api/functions/shop.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, Typography, styled } from "@mui/material";
// import Slider from "react-slick";
import { CategoryRoot } from "@/interface/catresp.interface";
import styles from "@/styles/pages/home.module.scss";
import { AllCatWiseRoot } from "@/interface/allcat.interface";
import SingleSlider from "@/components/SingleSlider/SingleSlider";
import ProductCard from "@/components/CardComponent/ProductCard";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

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

const Slider = dynamic(() => import("react-slick"), {
  ssr: true
});
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
  const router = useRouter();

  return (
    <Wrapper>
      <StyledContainer>
        {/* <ShopCard /> */}

        <div className={styles.image_slider_container}>
          <Slider {...sliderSettings}>
            {allcategory?.all_category_dtls?.map((item, index) => (
              <Link href={`/categorydetails/${item?.slug}`}>
                <Box
                  className="singlewrapslider"
                  // onClick={() => router.push(`/categorydetails/${item?.slug}`)}
                >
                  <SingleSlider
                    img={`${item?.cat_thumbnail as string}`}
                    name={item?.title}
                  />
                </Box>
              </Link>
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
                    <Box className="singlewrapslider" sx={{ my: 2, mx: 1 }}>
                      <ProductCard
                        img={product?.product_meta_data[3]?.value?.image}
                        title={`${product?.product_name.slice(0, 35)}...`}
                        price={product.product_price}
                        prdlink={product?.product_link}
                        offerpirce={product.product_sale_price}
                      />
                    </Box>
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const categoryData = await getCategory();
  const categorydetailsData = await getCategoryDetails();
  // const  productData = await getCategoryWiseDetails();
  // context.res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  return {
    props: { allcategory: categoryData, catwiseData: categorydetailsData }
  };
};
export default Home;
