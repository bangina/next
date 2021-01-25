export async function getSortedExternalPostsData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
