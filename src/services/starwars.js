const API_KEY = 'https://swapi.dev/api/starships/';

const show = async () => {
    try {
        const res = await fetch(API_KEY);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { show };