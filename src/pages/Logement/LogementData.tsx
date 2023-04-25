import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Accommodation } from "../../Data/Data";
import Page404 from "../Page404/Page404";
import "./Logement.scss";

interface LogPropos {
  data: Accommodation[];
}

const LogementData = ({ data }: LogPropos) => {
  const { logementId } = useParams();
  const [result, setResult] = useState<Accommodation | undefined>(undefined);

  useEffect(() => {
    if (data) {
      const found = data.find((element) => element.id === logementId);
      setResult(found);
    }
  }, [data, logementId]);

  if (result === undefined) {
    return <Page404 />;
  }

  console.log(result);

  return (
    <>
      <div className="InfoLog">
        <div className="TopInfos">
          <div className="element">
            <h1 className="titre_log">{result.title}</h1>
            <p className="location">{result.location}</p>
            <div className="tag">
              {result.tags?.map((item) => (
                <div className="tags">{item}</div>
              ))}
            </div>
          </div>
          <div className="element">
            <p className="name"> {result.host?.name}</p>
            <img className="picture" src={result.host?.picture} alt="pictur" />
            <div className="review">
              {/* {result.rating?.map((ratin) => (
                <div className="tags">{ratin}</div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogementData;
