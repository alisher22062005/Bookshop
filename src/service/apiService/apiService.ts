import axios from "axios";
export default async function apiService({ genre }: { genre: string }) {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=9`
  );
  // console.log(res.data.items[0].volumeInfo);
  const data = res.data.items.map((item: any) => {
    return {
      title: item.volumeInfo.title,
      describe: item.volumeInfo.description,
      author: item.volumeInfo.authors?.[0],
      image: item.volumeInfo.imageLinks?.thumbnail,
      id: item.id,
    };
  });

  console.log("data: ", data);
  return data;
}

export async function apiServiceSearch({ title }: { title: string }) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=9`
    );
    if (!res.data.items || res.data.items.length === 0) {
      return []; // No books found
    }
    const data = res.data.items.map((item: any) => {
      return {
        title: item.volumeInfo.title,
        describe: item.volumeInfo.description,
        author: item.volumeInfo.authors?.[0],
        image: item.volumeInfo.imageLinks?.thumbnail,
        id: item.id,
      };
    });
    return data;
  } catch {
    return [];
  }
}

export async function apiServiceID({ id }: { id: string }) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    console.log("RES_DATA", res.data.volumeInfo);

    const {
      title,
      describe,
      authors,
      categories,
      publishedDate,
      pageCount,
      imageLinks,
    } = res.data.volumeInfo;

    const booksData = {
      title,
      describe: describe,
      author: authors?.[0] ?? "Unknown", // get first author
      image: imageLinks?.thumbnail ?? "", // or smallThumbnail
      publishedDate,
      pageCount,
      categories: categories?.[0] ?? "Unknown", // first category
    };
    console.log(booksData);

    return booksData;
  } catch {
    return undefined;
  }
}
