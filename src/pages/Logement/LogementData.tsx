import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accommodation } from '../../Data/Data';
import Page404 from '../Page404/Page404';

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

  console.log(result)

  return <div>LogInfo</div>;
};

export default LogementData;
