import axios from "axios";
export default async function apiService({ genre }: { genre: string }) {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=10`
  );

  const data = res.data.items.map((item: any) => {
    return {
      title: item.volumeInfo.title,
      describe: item.volumeInfo.description,
      author: item.volumeInfo.authors?.[0],
      image: item.volumeInfo.imageLinks?.thumbnail,
    };
  });
  console.log("data: ", data);
  return data;
}

const itemsService = {};
