import {
    API_ENDPOINTS,
    ENDPOINT_METHODS,
    HEADER_PARAMS
  } from "../constants/constant";

export const getDonorsAPI = async () => {
    let URL = API_ENDPOINTS.DONORS;
    const myHeaders = new Headers();
    myHeaders.append(HEADER_PARAMS.CONTENT_TYPE, HEADER_PARAMS.APPLICATION_TYPE);
  
    const requestOptions = {
      method: ENDPOINT_METHODS.METHOD_GET,
      headers: myHeaders,
    };
  
    return await kuAPI(URL, requestOptions);
  };
  
  const kuAPI = async (url, requestOptions) => {
  
    return fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  };