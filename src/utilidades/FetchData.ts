

class FetchData{
  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}

  

export {FetchData};