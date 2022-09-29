import axios, { AxiosResponse } from "axios";

const RequestObj: () => Promise<
  AxiosResponse<any, any> | undefined
> = async () => {
  let res = await axios({
    url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(
      Math.random() * 481486
    )}`,
  }).catch(async (err) => {
    if (err) {
      await axios({
        url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(
          Math.random() * 481486
        )}`,
      });
    }
  });

  while (res?.status !== 200 || !res?.data?.primaryImage)
    res = await axios({
      url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(
        Math.random() * 481486
      )}`,
    }).catch(async (err) => {
      if (err) {
        await axios({
          url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(
            Math.random() * 481486
          )}`,
        });
      }
    });

  return res;
};

export default RequestObj;
