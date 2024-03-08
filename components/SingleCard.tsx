import { AllCategoryDtl } from "@/interface/catresp.interface";
import { Rating, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
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
interface cardProps {
  clientimg: string;
  clientname: string;
}
export default function SingleCard(props: AllCategoryDtl) {
  return (
    <SinglewrapcrtFeed>
      <Box className="mainwrap-singlcrtfeed">
        <Box className="top-partInnrimg">
          <i>
            <Image
              src={props?.cat_thumbnail}
              width={290}
              height={200}
              alt="userimage"
            />
          </i>
          <Box className="clientnameStart">
            <Typography variant="caption">{props?.title}</Typography>
            <Box className="star-rating">
              <Typography>{props?.slug}</Typography>
              {/* <Image src={props.clientstart} width={108} height={16} alt='starticon'/> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </SinglewrapcrtFeed>
  );
}
