function getImageUrl(url: string): string {
    return `${process.env.REACT_APP_API_URL}${url}`;
}

export default getImageUrl;
