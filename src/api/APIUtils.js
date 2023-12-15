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

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
// Search full country name
export const fetchSearch = async (search) => {
  if (search === '') return fetchDataAll();
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${search}?fullText=tru`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchIndependent = async () => {
  console.log('Fetching');
  try {
    const response = await fetch(`https://restcountries.com/v3.1/independent`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//Filter Response
//https://restcountries.com/v3.1/all?fields=name,capital,currencies

//https://restcountries.com/v3.1/independent

//subregions
//https://restcountries.com/v3.1/subregion/Southern Asia
