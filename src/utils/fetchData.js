export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cc690bd54bmsh1e054805cab70b7p1e2e5ajsndfe2d6c6c77e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cc690bd54bmsh1e054805cab70b7p1e2e5ajsndfe2d6c6c77e',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async(url,options)=>{
    const response = await fetch(url, options)
    const data = await response.json()


    return data;
}