class API {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async post(endpoint, data) {
      try {
        const response = await fetch(this.baseUrl + endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        return await response.json();
      } catch(e) {
        return null;
      }
      
    }

    async get(endpoint) {
      try {
        const response = await fetch(this.baseUrl + endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        return await response.json();
      } catch(e) {
        return null;
      }
      
    }
}

module.exports = {
    API
}