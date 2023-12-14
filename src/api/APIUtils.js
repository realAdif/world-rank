export const fetchDataAll = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const fetchDataRegion = async (region) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    console.log('fetching data API', region);
    const data = await response.json();
    console.log('fetching data API', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchSearch = async (search) => {
  if (search === '') return fetchDataAll();
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${search}?fullText=tru`
    );
    console.log('fetching data API', search);
    const data = await response.json();
    console.log('fetching data API', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Search full country name
// https://restcountries.com/v3.1/name/${name}?fullText=tru

//Filter Response
//https://restcountries.com/v3.1/all?fields=name,capital,currencies

//https://restcountries.com/v3.1/independent
