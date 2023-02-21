async function search () {
    const response = await fetch('https://rickandmortyapi.com/api/character/50')
    const data = await response.json()
    console.log(data)
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('species').innerHTML = data?.species ;
    document.getElementById('status').innerHTML = data?.status;
    document.getElementById('gender').innerHTML = data?.gender;
    document.getElementById('image').src = data?.image; 
      
}
search()
