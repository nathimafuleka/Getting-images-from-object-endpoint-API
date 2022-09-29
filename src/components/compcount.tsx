import Countdown from "react-countdown";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Compimg from "./compimg";
import React, { useEffect, useState } from "react";
import RequestObj from "../utils/reqobj";

const Compcount = () => {
  const [objData, setObjData] = useState<any>();
  const [dataSet, setDateSet] = useState(Date.now() + 10000);
  const [isLoading, setIsLoading] = useState(false);

  const hif = async () => {
    setIsLoading(true);
    let res = await RequestObj().catch(async (err) => {
      if (err) res = await RequestObj();
    });
    setObjData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    hif();
  }, []);

  return (
    <>
      <Countdown
        overtime
        date={dataSet}
        renderer={(el) => (
          <React.Fragment>
            <Compimg
              loading={isLoading}
              objData={objData}
              imgclick={() => {
                if (el.api.isPaused()) {
                  el.api.start();
                } else {
                  el.api.pause();
                }
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
                height: "80px",
                background: "#ed6c02",
              }}
            >
              <Typography fontSize={32} color={"#212121"}>
                {el.seconds}
              </Typography>
            </Box>
          </React.Fragment>
        )}
        onComplete={() => {
          hif();
          setDateSet(Date.now() + 10000);
        }}
      />
    </>
  );
};

export default Compcount;
