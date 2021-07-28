import React, { useEffect, useState } from "react";
import Offers from "./Offers";
import OffersLoading from "./OffersLoading";
import config from "../../config";

function FeedCDH() {
  // eslint-disable-next-line new-cap
  const CDHOffersLoading = OffersLoading(Offers);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const customerID = config.customerID;
    const containerName = config.containerName;
    const channel = config.channel;
    const baseUrl =
      config.baseUrl !== "" ? config.baseUrl : window.location.origin;
    const apiVersion = config.apiVersion;
    const apiUrl = `${baseUrl}/prweb/PRRestService/PegaMKTContainer/${apiVersion}/Container`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        CustomerID: customerID,
        ContainerName: containerName,
        Channel: channel,
      }),
    };
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((offers) => {
        setAppState({
          loading: false,
          offers: offers.ContainerList[0].RankedResults,
        });
      })
      .catch((e) => {
        console.error(e);
        setAppState({ loading: false });
      });
  }, [setAppState]);
  return (
    <CDHOffersLoading isLoading={appState.loading} offers={appState.offers} />
  );
}
export default FeedCDH;
