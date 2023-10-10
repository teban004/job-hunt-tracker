import Table from '../Components/Table';

function Home() {

    const data = [
        {"title": "Software Engineer", "company": "Scotiabank", "status": "Applied", "date": "2023-09-28", "lastUpdated": ""},
        {"title": "Software Developer", "company": "CRA", "status": "Pending", "date": "2023-09-26", "lastUpdated": ""},
        {"title": "Application Developer", "company": "Bell", "status": "Applied", "date": "2023-09-21", "lastUpdated": "2023-09-27"},
        {"title": "Full Stack Developer", "company": "CIBC", "status": "Closed", "date": "2023-09-08", "lastUpdated": "2023-09-22"},
    ];

    const columns = [
        { label: 'Title', field: 'title' },
        { label: 'Company', field: 'company' },
        { label: 'Status', field: 'status' },
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
  