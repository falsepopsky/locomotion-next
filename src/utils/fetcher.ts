export const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    if (data?.error) {
      throw new Error(data.error);
    }
    throw new Error('Something went wrong');
  }
  return data;
};
