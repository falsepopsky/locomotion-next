export const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    if (data?.message) {
      throw new Error(data.message);
    }
    throw new Error('Something went wrong while fetching the data');
  }
  return data;
};
