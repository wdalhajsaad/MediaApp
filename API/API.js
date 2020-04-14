
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

export const GetServices=()=>{
 const url ='https://www.media.gov.sa/v3/mobile-apps/news/get_eservices';
  return(fetch(url)
      .then(res => res.json())
      .catch(error => {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   )

}

export const GetTicketDaya=(Ticket_Id,Phone)=>{
  //  console.log(Ticket_Id,Phone);
const url=`https://tss.media.gov.sa/tera/ticket/api/searchticket/${Ticket_Id}/${Phone}`;
  return(fetch(url)
      .then(res => res.json())
      .catch(error => {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   )
}
//https://tss.media.gov.sa/tera/ticket/api/searchticket/22488/966501298281


export const GetFaaliat=(pagenumber)=>{
const url=`https://faaliat.sa/GridWebAPI/api/EntityEvents?pageSize=8&pageNumber=${pagenumber}`;
  return(fetch(url, {
  headers: {
              'Entity': '1',
              'pageSize':10,
              'pageNumber':1
               //'Content-Type': 'application/json',
            }})
      .then(res => res.json())
      .catch(error => {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   )

}
