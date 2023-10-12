import Table from '../Components/Table';

function Home() {

    const data = [
        {
          "title": "Software Developer", 
          "company": "Scotiabank", 
          "status": "Applied", 
          "link": "https://jobs.scotiabank.com/job/Toronto-Software-Developer-ON-M5A3X5/573382017/", 
          "date": "2023-09-17", 
          "lastUpdated": ""
        },
        {
          "title": "Full Stack Developer", 
          "company": "Onyen Corporation", 
          "status": "Closed",
          "link": "https://ca.indeed.com/viewjob?cmp=Onyen-Corporation&t=Full+Stack+Developer&jk=b21ab7f094d4b171&q=full+stack+developer+spanish&vjs=3",
          "date": "2023-08-03", 
          "lastUpdated": ""
        },
        {
          "title": "Full Stack Software Engineer", 
          "company": "Forward Security Inc.", 
          "status": "Closed", 
          "link": "https://ca.indeed.com/viewjob?jk=e9a49e9922883018",
          "date": "2023-10-06", 
          "lastUpdated": "2023-10-11"
        },
        {
          "title": "Developer", 
          "company": "IT Unlock", 
          "status": "Closed", 
          "link": "",
          "date": "2023-09-25", 
          "lastUpdated": ""
        },
        {
          "title": "Software Developer", 
          "company": "Scotiabank", 
          "status": "Applied", 
          "link": "https://jobs.scotiabank.com/job/Toronto-Software-Developer-ON-M5A3X5/573606617/", 
          "date": "2023-09-17", 
          "lastUpdated": ""
        },
    ];

    const columns = [
        { label: 'Title', field: 'title' },
        { label: 'Company', field: 'company' },
        { label: 'Status', field: 'status' },
        { label: 'Link', field: 'link' },
        { label: 'Date', field: 'date' },
        { label: 'Last Updated On', field: 'lastUpdated' },
      ];
  
    return (
      <div className="home">
        <h1>Latest applications</h1>
        <Table data={data} columns={columns} defaultPageSize={10} />
      </div>
    );
}
  
export default Home;
  