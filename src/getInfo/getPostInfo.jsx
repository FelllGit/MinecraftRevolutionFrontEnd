import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getPost([setPost], id) {
    
  try {
    const response = await axios.get(`http://localhost:80/api/posts/${id}`);
    const user = response.data;
    setPost(user);
  } catch (error) {
      console.error(error);
      setPost(null);
  }
  
}

export default getPost;
