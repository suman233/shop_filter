import { getCategoryDetails } from "@/api/functions/shop.api";
import { AllCatWiseRoot } from "@/interface/allcat.interface";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/pages/home.module.scss";
import Slider from "react-slick";
import ProductCard from "@/components/CardComponent/ProductCard";

type Props = {
  catwiseData: AllCatWiseRoot;
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

const CategoryWiseProducts = ({catwiseData}: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  const catdata=catwiseData.all_products.filter((item)=>item.slug===slug? item : null)
  console.log(catdata);
  
  return (
    <Container>
      <Typography>{slug}</Typography>
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
                    <>
                      <Box
                        className="singlewrapslider"
                        key={index}
                        sx={{ my: 2, mx: 1 }}
                      >
                        <ProductCard
                          img={product?.product_meta_data[3]?.value?.image}
                          title={product?.product_name}
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
    </Container>
  );
};

export const getServerSideProps = async () => {
  const categorydetailsData = await getCategoryDetails();
  // const  productData = await getCategoryWiseDetails();

  return {
    props: { catwiseData: categorydetailsData }
  };
};

export default CategoryWiseProducts;
