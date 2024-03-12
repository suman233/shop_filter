import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
const SinglewrapcrtFeed = styled(Box)`
  .mainwrap-singlcrtfeed {
    position: relative;
    .top-partInnrimg {
      display: flex;
      margin-bottom: 20px;
      i {
        width: 60px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .clientnameStart {
        width: calc(100% - 60px);
        padding-left: 20px;
        span {
          font-size: 20px;
          font-weight: 600;
          color: var(--color343641);
          display: inline-block;
          margin-bottom: 4px;
        }
      }
    }
  }
`;
interface cardProps {
  img: string;
  title: string;
  price: string;
  offerpirce: string;
  prdlink: string;
}
export default function ProductCard(props: cardProps) {
  const router = useRouter();
  const { img, title, price, offerpirce, prdlink } = props;
  return (
    <SinglewrapcrtFeed>
      <Paper sx={{ mx: 2 }} elevation={6}>
        <Box className="mainwrap-singlcrtfeed">
          <Box className="top-partInnrimg" sx={{ m: "auto" }}>
            <Image
              src={img}
              width={300}
              height={200}
              style={{ margin: "auto", height: 300 }}
              alt="product image"
            />
          </Box>
          <Box className="bottom-partTxt" sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{
                color: "black",
                fontSize: "16px",
                "&:hover": { color: "#347589" }
              }}
              onClick={() => router.push(`${prdlink}`)}
            >
              {/* <Link
                href={`${props.prdlink}`}
                style={{ textDecoration: "none", color: "black" }}
              > */}
              {title}
              {/* </Link> */}
            </Typography>
          </Box>
          <Box>
            {offerpirce ? (
              <>
                <Button
                  disabled
                  sx={{ mx: 2, color: "black", backgroundColor: "gray" }}
                >
                  ${price}
                </Button>
                <Button
                  sx={{ mx: 2, color: "black", backgroundColor: "lightgray" }}
                >
                  ${offerpirce}
                </Button>
              </>
            ) : (
              <Button
                sx={{ mx: 2, color: "black", backgroundColor: "lightgray" }}
              >
                ${price}
              </Button>
            )}
          </Box>
        </Box>
        <Typography sx={{ m: "auto", textAlign: "center", my: 1, py: 1 }}>
          <Button variant="contained">Add to Cart</Button>
        </Typography>
      </Paper>
    </SinglewrapcrtFeed>
  );
}
