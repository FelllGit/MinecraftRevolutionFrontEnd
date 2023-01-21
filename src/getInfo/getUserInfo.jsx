import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getUser([setUser], id) {
  try {
    const response = await axios.get(`http://localhost:80/api/users/${id}`);
    const user = response.data;
    setUser(user);
  } catch (error) {
      console.error(error);
      setUser(null);
  }
}

export default getUser;
