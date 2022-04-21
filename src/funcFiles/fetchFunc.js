const fetchFunc = async (name, page) => {
    const BASE_CASE = "https://pixabay.com/api/?";
    const API_KEY = "26654648-b583e9a090522ce0710c170d0";

     const requestImg = await fetch(`${BASE_CASE}key=${API_KEY}&q=${name}&page=${page}
      &image_type=photo&orientation=horizontal&per_page=12`);

    if (!requestImg.ok) {
        throw new Error("Error!!!")
    }

    const responseImg = await requestImg.json();
    return responseImg;
}


export default fetchFunc;