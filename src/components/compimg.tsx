import Paper from "@mui/material/Paper";
import { Box, Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Compdetail from "./compdetail";

type Props = {
  imgclick: () => void;
  objData: any;
  loading: boolean;
};

const Compimg = ({ objData, imgclick, loading }: Props) => {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div>
      <Paper
        sx={{
          height: "600px",
          overflow: "hidden",
          width: "400px",
          background: "#212121",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        elevation={2}
      >
        {loading ? (
          <div className="flex justify-center items-center text-white uppercase h-full">
            Loading
          </div>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                textAlign={"center"}
                color={"#ed6c02"}
                fontSize={20}
                fontWeight={100}
                sx={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 1,
                }}
              >
                {objData?.title}
              </Typography>
            </Box>
            <div
              onClick={() => {
                setIsDetail(!isDetail);
                imgclick();
              }}
              className="relative cursor-pointer flex-1 overflow-hidden flex justify-center items-center"
            >
              <img
                loading="eager"
                className="absolute object-cover object-center"
                title={objData?.title || "None"}
                src={objData?.primaryImage || ""}
                alt=""
              />
            </div>
            <Box
              sx={{
                padding: "4px",
                display: "flex",
                gap: 1,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {objData?.tags ? (
                objData?.tags?.map((el: any) => (
                  <Chip
                    key={el.term}
                    color="warning"
                    id={el.term}
                    label={el.term}
                    variant="outlined"
                  />
                ))
              ) : (
                <Chip color="warning" label="None" variant="outlined" />
              )}
            </Box>

            <Compdetail
              details={objData}
              close={() => {
                setIsDetail(false);
                imgclick();
              }}
              open={isDetail}
            />
          </>
        )}
      </Paper>
    </div>
  );
};

export default Compimg;
