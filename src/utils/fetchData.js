export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '21ffb14dc6msh24147dfe8665796p1b28e2jsn0bfea2f5dcc6'
  },
};

export const YTOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '21ffb14dc6msh24147dfe8665796p1b28e2jsn0bfea2f5dcc6'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};