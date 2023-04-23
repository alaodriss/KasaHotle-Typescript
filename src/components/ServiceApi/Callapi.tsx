import axios from 'axios';
import { Accommodation } from '../../Data/Data';

// Define the interface for the mock response data
interface MockData {
  data: Accommodation[];
}


// Retrieve the data from the mock API
export const getAccommodations = () => {
  return axios.get<MockData>('../../Data/MockData.ts')
    .then(response => {
      // Use the response data
      const accommodations = response.data.data;
      console.log(accommodations);
      return accommodations;
    })
    .catch(error => {
      console.error(error);
    });
};
