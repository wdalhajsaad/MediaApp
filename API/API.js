
export const GetNews= () => {
    const url = `https://www.media.gov.sa/v3/mobile-apps/news/InternalPortal`;
   // this.setState({ loading: true });
   return(fetch(url)
      .then(res => res.json())
      .catch(error => {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   )

}

export const GetGallery=()=>{
const url=`https://www.media.gov.sa/v3/mobile-apps/news/instagram`;
  return(fetch(url)
      .then(res => res.json())
      .catch(error => {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   )

}