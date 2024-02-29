
(async function fetchData() {
    try {
      const response = await fetch('https://white-rune-410804.df.r.appspot.com/api/routes');
   // const response = await fetch('http://34.131.57.55:8080/api/routes');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
     const data = await response.json();
    localStorage.setItem('mfe1', JSON.stringify(data[0]));
    localStorage.setItem('mfe2',JSON.stringify(data[1]));
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  })()
