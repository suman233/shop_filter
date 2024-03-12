import {
  getCategoryDetails,
  getCategoryWiseDetails
} from "@/api/functions/shop.api";
import { AllCatWiseRoot } from "@/interface/allcat.interface";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/pages/home.module.scss";
import Slider from "react-slick";
import ProductCard from "@/components/CardComponent/ProductCard";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Button, TextField, inputLabelClasses } from "@mui/material";
import { CatWiseRoot } from "@/interface/products.interface";

type Props = {
  catwisePrdData: CatWiseRoot;
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

const CategoryWiseProducts = ({ catwisePrdData }: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  const catdata = catwisePrdData.filter((item) =>
    item.slug === slug ? item : null
  );

  return (
    <Wrapper>
      <section style={{ background: "lightblue" }}>
        <Container>
          <TextField
            id="filled-size-normal"
            variant="outlined"
            placeholder="Search here"
            sx={{
              mr: 2,
              mt: 1,
              backgroundColor: "#f2f6f7",
              color: "black",
              width: "90%"
            }}
            InputLabelProps={{
              sx: {
                color: "black",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "white"
                }
              }
            }}
            InputProps={{
              sx: {
                color: "black"
              }
            }}
          />
          <Button variant="contained" sx={{ m: 1 }}>
            Search
          </Button>
          <Box>
            {catwisePrdData?.map((category) => {
              return (
                <>
                  {category?.slug === slug ? (
                    <Button sx={{ mx: 2, my: 1 }} variant="contained" disabled>
                      {category?.title}
                    </Button>
                  ) : (
                    <Button
                      sx={{ mx: 2, my: 1 }}
                      variant="contained"
                      color="info"
                      onClick={() => router.push(`${category.slug}`)}
                    >
                      {category?.title}
                    </Button>
                  )}
                </>
              );
            })}
          </Box>
        </Container>
        <Container sx={{}}>
          {catdata?.map((item, i) => {
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
                          title={`${product?.product_name.slice(0, 10)}...`}
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
        </Container>
      </section>
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  // const categorydetailsData = await getCategoryDetails();
  const productData = await getCategoryWiseDetails();

  return {
    props: { catwisePrdData: productData }
  };
};

export default CategoryWiseProducts;
