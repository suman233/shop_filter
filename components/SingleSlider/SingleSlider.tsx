import { AllCategoryDtl } from "@/interface/catresp.interface";
import { Paper, Rating, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
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
interface sliderProps {
  img: string;
  name: string;
  
}
export default function SingleSlider(props: sliderProps) {
  const router = useRouter();
  return (
    <SinglewrapcrtFeed>
      <Paper sx={{mx:2}}>
        <Box className="mainwrap-singlcrtfeed">
          <Box className="top-partInnrimg" sx={{ m: "auto" }}>
            <Image
              src={props?.img || ""}
              width={300}
              height={200}
              style={{ margin: "auto", height:300 }}
              alt="product image"
            />
          </Box>
          <Box className="bottom-partTxt" sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{ color: "black", fontSize: "16px" }}
            >
              {props?.name}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </SinglewrapcrtFeed>
  );
}
