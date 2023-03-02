import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getUser([setUser]) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:80/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    console.log(user);
    setUser(user);
  } catch (error) {
      console.error(error);
      setUser(null);
  }
}

export default getUser;
