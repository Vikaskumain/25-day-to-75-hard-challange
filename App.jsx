import  { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  

  return (
    <div className="container mx-auto mt-8 bg-green-400">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

